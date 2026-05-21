#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys
import time
import urllib.request
import urllib.error

# Configuration
INPUT_FILE = "/home/corne/tmp/SOS-Pest_considering.json"
SCRYFALL_API_URL = "https://api.scryfall.com/cards/collection"


def parse_decklist(file_path):
    """Parses a raw decklist file, filtering out headers and empty lines,

    and extracts unique card names.
    """
    identifiers = []
    seen_names = set()

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"Error: Input file '{file_path}' not found.")
        return []

    for line in lines:
        line = line.strip()

        # Skip empty lines, comments, or common export headers
        if (
            not line
            or line.startswith("//")
            or line.startswith("About")
            or line.startswith("Name")
            or line.lower() == "deck"
            or line.lower() == "sideboard"
        ):
            continue

        # Match quantity followed by card name (e.g., "4 Blech, Loafing Pest")
        ## TODO Add matching for card extensions and numbers (e.g., "4 Blech, Loafing Pest (STX) 123")
        match = re.match(r"^(\d+)\s+(.+)$", line)
        if match:
            card_name = match.group(2).strip()
        else:
            # Fallback if a line just contains the card name without a quantity
            card_name = line

        # Deduplicate to minimize payload size and API overhead
        if card_name not in seen_names:
            seen_names.add(card_name)
            identifiers.append({"name": card_name})

    return identifiers


def chunk_list(lst, size):
    """Yields successive chunks from a list."""
    for i in range(0, len(lst), size):
        yield lst[i : i + size]


def fetch_scryfall_data(identifiers):
    """Sends batched requests to Scryfall API and extracts core oracle data."""
    compiled_cards = []

    # Scryfall /cards/collection accepts a maximum of 75 cards per batch
    for chunk in chunk_list(identifiers, 75):
        payload = json.dumps({"identifiers": chunk}).encode("utf-8")

        req = urllib.request.Request(
            SCRYFALL_API_URL,
            data=payload,
            headers={
                "Content-Type": "application/json",
                "User-Agent": "curl/8.14.1",
                "Accept": "application/json"
            },
            method="POST",
        )

        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode("utf-8"))

            if "not_found" in data and data["not_found"]:
                print(f"Warning: Cards not found by Scryfall: {data['not_found']}", file=sys.stderr)

            for card in data.get("data", []):
                # Handle double-faced, split, or adventure cards
                if "card_faces" in card and "oracle_text" not in card:
                    faces = []
                    for face in card["card_faces"]:
                        faces.append(
                            {
                                "name": face.get("name"),
                                "mana_cost": face.get("mana_cost"),
                                "type_line": face.get("type_line"),
                                "oracle_text": face.get("oracle_text"),
                            }
                        )
                    compiled_cards.append({"name": card.get("name"), "faces": faces})
                else:
                    # Standard single-faced card
                    compiled_cards.append(
                        {
                            "name": card.get("name"),
                            "mana_cost": card.get("mana_cost"),
                            "type_line": card.get("type_line"),
                            "oracle_text": card.get("oracle_text"),
                        }
                    )

        except urllib.error.HTTPError as e:
            print(f"HTTP Error: {e.code} - {e.reason} : {e.readlines()}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

        # Respect Scryfall's rate limit guidelines
        time.sleep(0.1)

    return compiled_cards


def main():
    print(f"Parsing {INPUT_FILE}...")
    identifiers = parse_decklist(INPUT_FILE)

    if not identifiers:
        print("No cards found to process.")
        return

    print(f"Found {len(identifiers)} unique cards. Requesting data...")
    deck_data = fetch_scryfall_data(identifiers)

    print(json.dumps(deck_data, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
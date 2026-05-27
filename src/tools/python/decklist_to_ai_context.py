#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import json
import re
import sys
import time
import urllib.request
import urllib.error

# Configuration
SCRYFALL_API_URL = "https://api.scryfall.com/cards/collection"


def parse_decklist(input_stream):
    """Parses a raw decklist from an input stream (file or stdin),

    filtering out headers and empty lines, and extracts unique card names.
    """
    identifiers = []
    seen_names = set()

    try:
        lines = input_stream.readlines()
    except Exception as e:
        print(f"Error reading input: {e}", file=sys.stderr)
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
            print(f"HTTP Error: {e.code} - {e.reason} : {e.readlines()}", file=sys.stderr)
        except Exception as e:
            print(f"An unexpected error occurred: {e}", file=sys.stderr)

        # Respect Scryfall's rate limit guidelines
        time.sleep(0.1)

    return compiled_cards


def main():
    parser = argparse.ArgumentParser(
        description="Fetch Oracle data from Scryfall based on a MTG decklist."
    )
    parser.add_argument(
        "-i", "--input",
        type=argparse.FileType("r", encoding="utf-8"),
        default=sys.stdin,
        help="Path to the decklist file. If omitted, reads from standard input (stdin)."
    )
    
    # Check if no arguments are provided AND stdin is an interactive terminal (empty/no pipe)
    if len(sys.argv) == 1 and sys.stdin.isatty():
        parser.print_help()
        sys.exit(1)
        
    args = parser.parse_args()

    with args.input as input_stream:
        identifiers = parse_decklist(input_stream)

    if not identifiers:
        print("No cards found to process.", file=sys.stderr)
        return

    print(f"Found {len(identifiers)} unique cards. Requesting data...", file=sys.stderr)
    deck_data = fetch_scryfall_data(identifiers)

    print(json.dumps(deck_data, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
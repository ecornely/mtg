#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import json
import os
import sys
from urllib import response
import requests
import re
from dotenv import load_dotenv

class LineInfo:
    def __init__(self, line):
        self.original = line
        self.card_english_name = None
        self.card_french_name = None
        mtga = re.match(r'^\s*(\d+)\s+(.*)\s+\((\w{3,})\) (\d+)*', line.strip())
        if mtga != None:
            self.card_count=int(mtga.group(1))
            self.card_name=mtga.group(2)
            self.card_set=mtga.group(3)
            self.card_set_number = mtga.group(4)
        else:
            numbered = re.match(r'^\s*(\d+)\s+(.*)\s*?', line.strip())
            if numbered is not None:
                self.card_count=int(numbered.group(1))
                self.card_name=numbered.group(2)
                self.card_set=None
                self.card_set_number = None
            else:
                self.card_count = None
                self.card_name = self.original.strip()
                self.card_set = None
                self.card_set_number = None

    def set_translations(self, en, fr):
        self.card_english_name = en
        self.card_french_name = fr

    def has_translation(self):
        return self.card_english_name is not None and self.card_french_name is not None

    def format(self, fmt):
        set_info = f" ({self.card_set} {self.card_set_number})" if self.card_set and self.card_set_number else ""
        count=f"{self.card_count} " if self.card_count is not None and self.card_count >= 1 else ""
        if fmt == "en":
            return f"{count}{self.card_english_name}"
        elif fmt == "fr":
            return f"{count}{self.card_french_name}"
        elif fmt == "fr_full":
            return f"{self.card_count} {self.card_french_name}{set_info}"
        elif fmt == "en_full":
            return f"{self.card_count} {self.card_english_name}{set_info}"
        else:
            return f"{self.card_count} {self.card_english_name}  / {self.card_french_name}{set_info}"
        
def search_line(line_info:LineInfo, url, token):
    """Effectue la requête POST vers l'API Meilisearch (ou similaire)."""
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    payload = {
        "q": line_info.card_name,
        "limit": 1
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json() # TODO parse response and add to line_info

        hits = data.get("hits", [])
        if not hits:
            return line_info
            
        hit = hits[0]
        en = hit.get("en", "")
        fr = hit.get("fr", "")
        line_info.set_translations(en, fr)

        return line_info
    except requests.exceptions.RequestException as e:
        print(f"Erreur lors de la requête pour '{line_info.card_name}': {e}", file=sys.stderr)
        return None
  
def main():
    parser = argparse.ArgumentParser(description="Recherche des termes dans l'index via API POST.")
    
    # Arguments obligatoires et optionnels
    parser.add_argument("input_file", type=argparse.FileType('r', encoding='utf-8'), 
                    help="Chemin vers le fichier texte ou '-' pour lire depuis l'entrée standard (stdin)")
    parser.add_argument("-e", "--env", help="Chemin vers le fichier .env (défaut: .env)", default=".env")
    parser.add_argument("-f", "--format", choices=["en", "fr", "en_full", "fr_full", "both"], default="both",
                        help="Format de sortie : 'en', 'fr' ou 'both' (tab-separated)")
    args = parser.parse_args()

    if os.path.exists(args.env):
        load_dotenv(args.env)
    
    token = os.getenv("bearer")
    if not token:
        print(f"Erreur : Clé 'bearer' non trouvée dans {args.env} ou l'environnement.", file=sys.stderr)
        sys.exit(1)

    url = os.getenv("search_url")
    if not url:
        url= "http://localhost:7700/indexes/terms/search"

    with args.input_file as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            
            line = LineInfo(line)

            line = search_line(line, url, token)
            
            if line.has_translation():
                print(line.format(args.format))
            else:
                print(f"❌ '{line}'", file=sys.stderr)

if __name__ == "__main__":
    main()
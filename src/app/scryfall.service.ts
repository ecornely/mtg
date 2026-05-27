import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, from, map, Observable, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScryfallService {

  private readonly baseUrl = 'https://api.scryfall.com/cards';

  constructor(private http: HttpClient) {}

  getCard(cardName: string): Observable<ScryfallCard> {
    return this.http.get<ScryfallCard>(`${this.baseUrl}/named?exact=${encodeURIComponent(cardName)}`);
  }

  getCollection(cardIdentifiers: CardIdentifier[]): Observable<ScryfallCard[]> {
    const CHUNK_SIZE = 70;
    const chunks: CardIdentifier[][] = [];

    // 1. Chunking : Split the main array into sub-arrays of max CHUNK_SIZE items
    for (let i = 0; i < cardIdentifiers.length; i += CHUNK_SIZE) {
      chunks.push(cardIdentifiers.slice(i, i + CHUNK_SIZE));
    }

    // 2. RxJS Pipeline
    return from(chunks).pipe(
      // concatMap ensures requests are executed sequentially (chained)
      concatMap((chunk) =>
        this.http
          .post<CardSearchResults>(`${this.baseUrl}/collection`, { identifiers: chunk })
          .pipe(map((response) => response.data))
      ),
      // toArray waits for all chunks to complete and merges the results into a single array of arrays
      toArray(),
      // flatten the array of arrays [ScryfallCard[], ScryfallCard[]] into a single ScryfallCard[]
      map((nestedResults) => nestedResults.flat())
    );
  }
}

export interface CardSearchResults {
  object: string;
  not_found?: string[];
  data: ScryfallCard[];
}

export interface CardIdentifier {
  name?: string;
  id?: string;
  mtgo_id?: number;
  multiverse_id?: number;
  oracle_id?: string;
  illustration_id?: string;
  set?: string;
  collector_number?: string;
}

export interface ScryfallCard {
  // Identifiants et métadonnées
  id: string;
  oracle_id: string;
  name: string;             // Nom anglais
  printed_name?: string;    // Nom dans la langue requêtée (si différente de EN)
  lang: string;
  uri: string;              // API URL
  scryfall_uri: string;     // URL de la page Scryfall (pour ton lien "Voir plus")

  // Images (Attention: peut varier si la carte a deux faces)
  image_uris?: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;       // Utile pour faire des bannières ou fonds d'écran
  };

  // Données de jeu
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;      // Le texte officiel de la règle
  colors: string[];
  rarity: string;
  set_name: string;         // Nom de l'édition (ex: "Murders at Karlov Manor")

  // Prix (en string, car ils peuvent être null)
  prices: {
    eur: string | null;
    eur_foil: string | null;
    usd: string | null;
    usd_foil: string | null;
    tix: string | null;
  };

  // Liens d'achat directs
  purchase_uris: {
    tcgplayer: string;
    cardmarket: string;     // LE lien que tu voulais pour ton bouton
    cardhoarder: string;
  };
}
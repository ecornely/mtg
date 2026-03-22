import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScryfallService {

  private readonly baseUrl = 'https://api.scryfall.com/cards/named';

  constructor(private http: HttpClient) {}

  getCard(cardName: string): Observable<ScryfallCard> {
    return this.http.get<ScryfallCard>(`${this.baseUrl}?exact=${encodeURIComponent(cardName)}`);
  }
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
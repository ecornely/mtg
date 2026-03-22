import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { CardSearchService } from '../card-search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, of, Subject, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ScryfallService, ScryfallCard } from '../scryfall.service';

@Component({
  selector: 'app-translation',
  imports: [ReactiveFormsModule, AsyncPipe, ClipboardModule],
  templateUrl: './translation.html',
  styleUrl: './translation.css',
})
export class Translation {
  searchControl = new FormControl('');
  selectedCard = signal<any>(null);
  card: any = null;
  copiedLang = signal<string | null>(null);
  scryfallCard: ScryfallCard | null = null;
  private cardSelection$ = new Subject<string>();

  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap(term => {
      if (!term || term.length <= 2) return of([]);
      return this.cardService.search(term);
    })
  );

  constructor(private cardService: CardSearchService, private scryfallService: ScryfallService, private cd: ChangeDetectorRef) {
    this.cardSelection$.pipe(
      tap(() => this.scryfallCard = null), 
      switchMap(cardName => this.scryfallService.getCard(cardName))
    ).subscribe(card => {
      this.scryfallCard = card;
      console.log("Received price data:", card);
      this.cd.detectChanges();
    });
  }

  selectCard(card: any) {
    this.card=card;
    this.selectedCard.set(card);
    this.searchControl.setValue(card.fr, { emitEvent: false });
    this.cardSelection$.next(card.en);
  }

  onCopied(lang: string) {
    this.copiedLang.set(lang);
    
    setTimeout(() => {
      this.copiedLang.set(null);
    }, 1000);
  }

}

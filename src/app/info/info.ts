import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ScryfallService } from '../scryfall.service';
import { AsyncPipe } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-info',
  imports: [ReactiveFormsModule, AsyncPipe, ClipboardModule],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  public copiedText = signal<string | null>(null);
  public searchResult: any[] = [];
  public searchControl = new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    });

  constructor(private scryfallService: ScryfallService, private cd: ChangeDetectorRef) {

  }
  
  searchCards(clickEvent: MouseEvent) {
    clickEvent.preventDefault();
    let cardIdentifiers = this.searchControl.value.split('\n').map(name => ({ name: name.trim() })).filter(identifier => identifier.name);
    this.scryfallService.getCollection(cardIdentifiers).subscribe(cards => {
      this.searchResult = cards;
      this.cd.detectChanges();
    });
  }

  onCopied(lang: string) {
    this.copiedText.set(lang);
    
    setTimeout(() => {
      this.copiedText.set(null);
    }, 1000);
  }
}

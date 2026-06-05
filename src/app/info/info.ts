import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ScryfallCard, ScryfallService } from '../scryfall.service';
import { ClipboardModule, Clipboard as CdkClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-info',
  imports: [ReactiveFormsModule, ClipboardModule],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  public copiedText = signal<string | null>(null);
  public contextCopiedText = signal<string | null>(null);
  public searchResult: ScryfallCard[] = [];
  public searchControl = new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    });

  constructor(private scryfallService: ScryfallService, private cd: ChangeDetectorRef, private clipboard: CdkClipboard) {

  }
  
  searchCards(clickEvent: MouseEvent) {
    clickEvent.preventDefault();
    let cardIdentifiers = this.searchControl.value.split('\n').map(name => ({ name: this.cleanupCardName(name.trim()) })).filter(identifier => identifier.name);
    this.scryfallService.getCollection(cardIdentifiers).subscribe(cards => {
      this.searchResult = cards;
      this.cd.detectChanges();
    });
  }

  onCopied(txt: string) {
    this.copiedText.set(txt);
    
    setTimeout(() => {
      this.copiedText.set(null);
    }, 1000);
  }

  copyContext(clickEvent: MouseEvent) {
    clickEvent.preventDefault();
    const context = this.searchResult.map(card => ({
                                "name": card.name,
                                "mana_cost": card.mana_cost,
                                "type_line": card.type_line,
                                "oracle_text": card.oracle_text,
                            }));
    const contextJson = JSON.stringify(context, null, 2);
    this.clipboard.copy(contextJson);
    this.contextCopiedText.set("Context Copied!");
    setTimeout(() => {
      this.contextCopiedText.set(null);
    }, 1000);
  }

  private cleanupCardName(name: string): string {
    return name.trim().replace(/^(?:\d+x?\s+)?(.*?)(?:\s+\([^)]+\))?(?:\s+\d+)?$/, '$1');
  }
}

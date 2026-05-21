import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardSearchService } from '../../card-search.service';
import { catchError, forkJoin, map, of } from 'rxjs';

@Component({
  selector: 'app-multi',
  imports: [ReactiveFormsModule],
  templateUrl: './multi.html',
  styleUrl: './multi.css',
})
export class Multi {
  public translatedText: string = '';

  public searchControl = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true
  });

  constructor(private cardService: CardSearchService, private cd: ChangeDetectorRef) {

  }

  translate(clickEvent: MouseEvent, targetLanguage: string = 'fr') {
    clickEvent.preventDefault();
    const lines = this.searchControl.value.split("\n").map(line => Multi.fromLine(line));
    const translationTasks$ = lines.map(line => {
      return this.cardService.search(line.original, 1).pipe(
        map( (results: any[]) => {
          if (results.length > 0) { 
            line.translated = results[0][targetLanguage] || line.original;
          }
          return line;
        }),
        catchError(err => {
          console.error(`Error translating line: ${line.original}`, err);
          return of(line);
        })
      );
    });
    forkJoin(translationTasks$).subscribe({
      next: (updatedCards) => {
        console.log('All translations completed:', updatedCards);
        this.translatedText = updatedCards.map(line => `${line.prefix} ${line.translated || line.original} ${line.suffix || ''}`).join("\n");
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('An unexpected error occurred during batch processing', err);
      }
    });
  }

  public static fromLine(line: string): TranslationLine {
    const match = line.match(/^(\d*)\s*(\w.*?)(\s*\(.*)?$/);
    if (match) {
      return {
        prefix: match[1],
        original: match[2],
        suffix: match[3],
        translated: ''
      };
    } else {
      return {
        prefix: '',
        original: line,
        suffix: '',
        translated: ''
      };
    }
  }
}

export interface TranslationLine {
  prefix: string;
  original: string;
  suffix: string;
  translated: string;
}
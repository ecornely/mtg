import { Component } from '@angular/core';
import { CardSet } from './set.model';

@Component({
    selector: 'app-sets',
    templateUrl: './sets.html',
    styleUrl: './sets.css',
})
export class Sets {
    public sets: CardSet[] = CardSet.ALL_SETS;

    public iconOnly: boolean = true;
    public checkable: boolean = true;
    public hidden :boolean = false;

    public hideUnchecked(event: any) {
        if (this.hidden) {
            const checkboxes = document.querySelectorAll('.set-card input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                const card = checkbox.closest('.set-card') as HTMLElement;
                card.style.display = '';
            });
            this.hidden = false;
        } else {
            const checkboxes = document.querySelectorAll('.set-card input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                const card = checkbox.closest('.set-card') as HTMLElement;
                if ((checkbox as HTMLInputElement).checked) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            this.hidden = true;
        }
    }
}

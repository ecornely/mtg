import { Component, OnInit } from '@angular/core';
import { CardSet } from './set.model';

@Component({
    selector: 'app-sets',
    templateUrl: './sets.html',
    styleUrl: './sets.css',
})
export class Sets implements OnInit {
    public sets: CardSet[] = CardSet.ALL_SETS;

    public iconOnly: boolean = false;
    public checkable: boolean = false;
    public hidden :boolean = false;

    ngOnInit() {
        // Load initial values from localStorage
        const iconOnlyStored = localStorage.getItem('iconOnly');
        if (iconOnlyStored !== null) {
            this.iconOnly = iconOnlyStored === 'true';
        }
        const checkableStored = localStorage.getItem('checkable');
        if (checkableStored !== null) {
            this.checkable = checkableStored === 'true';
        }
    }

    toggleIconOnly() {
        this.iconOnly = !this.iconOnly;
        localStorage.setItem('iconOnly', this.iconOnly.toString());
    }

    toggleCheckable() {
        this.checkable = !this.checkable;
        localStorage.setItem('checkable', this.checkable.toString());
    }

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

    public openSet(event: Event, set: CardSet) {
        event.preventDefault();
        if (event instanceof MouseEvent && event.shiftKey) {
            window.open(`https://scryfall.com/sets/${set.setCode.toLocaleLowerCase()}`, '_blank', 'noopener');
        }else{
            window.open(set.setLink, '_blank', 'noopener');
        }
    }
}

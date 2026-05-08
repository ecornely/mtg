import { Component, OnInit } from '@angular/core';
import { CardSet } from './set.model';
import { LucideAngularModule} from 'lucide-angular';

@Component({
    selector: 'app-sets',
    templateUrl: './sets.html',
    styleUrl: './sets.css',
    imports: [LucideAngularModule]
})
export class Sets implements OnInit {
    public sets: CardSet[] = this.mapStatuses(CardSet.ALL_SETS);

    public iconOnly: boolean = false;
    public checkable: boolean = false;
    public hidden :boolean = false;
    public reverse :boolean = false;

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
        const reverseStored = localStorage.getItem('reverse');
        if (reverseStored !== null) {
            this.reverse = reverseStored === 'true';
        }
        if (this.reverse) {
            this.sets = this.mapStatuses([...CardSet.ALL_SETS].reverse());
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

    toggleReverse() {
        this.reverse = !this.reverse;
        localStorage.setItem('reverse', this.reverse.toString());
        if (this.reverse) {
            this.sets = this.mapStatuses([...CardSet.ALL_SETS].reverse());
        } else {
            this.sets = this.mapStatuses([...CardSet.ALL_SETS]);
        }
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

    public mapStatuses(sets: CardSet[]): CardSet[] {
        const now = new Date().getTime();
        const currentReleaseDate = sets
            .map(i => new Date(i.releaseDate).getTime())
            .filter(time => time <= now)
            .reduce((latest, current) => (current > latest ? current : latest), 0);

        return sets.map(set => {
            const releaseTime = new Date(set.releaseDate).getTime();
            if (releaseTime > now) {
                set['status'] = 'upcoming';
            } else if (releaseTime === currentReleaseDate) {
                set['status'] = 'current';
            } else {
                set['status'] = 'released';
            }
            return set;
        });
    }
}

import { Routes } from '@angular/router';
import { Cheat } from './cheat/cheat';
import { Sets } from './sets/sets';
import { Translation } from './translation/translation';

export const routes: Routes = [
    { path: '', component: Cheat },
    { path: 'sets', component: Sets },
    { path: 'translation', component: Translation },
];

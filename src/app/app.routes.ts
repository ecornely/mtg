import { Routes } from '@angular/router';
import { Cheat } from './cheat/cheat';
import { Sets } from './sets/sets';

export const routes: Routes = [
    { path: '', component: Cheat },
    { path: 'sets', component: Sets },
];

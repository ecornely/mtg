import { Routes } from '@angular/router';
import { Cheat } from './cheat/cheat';
import { Sets } from './sets/sets';
import { Info } from './info/info';

export const routes: Routes = [
    { path: '', component: Cheat },
    { path: 'sets', component: Sets },
    { path: 'translation', loadChildren: () => import('./translation/translation.route').then(m => m.routes) }, 
    { path: 'info', component: Info }
];

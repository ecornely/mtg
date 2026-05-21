import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./translation').then(m => m.Translation),
        children: [
        { 
            path: '', 
            redirectTo: 'single', 
            pathMatch: 'full' 
        },
        { 
            path: 'single', 
            loadComponent: () => import('./single/single').then(m => m.Single) 
        },
        { 
            path: 'multi', 
            loadComponent: () => import('./multi/multi').then(m => m.Multi) 
        }
        ]
    }
];

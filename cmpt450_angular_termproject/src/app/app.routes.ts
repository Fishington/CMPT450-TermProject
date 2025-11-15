import { Routes } from '@angular/router';

import { MainDashboardPage } from './main-dashboard-page/main-dashboard-page';
import { GameDetails } from './game-details/game-details';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainDashboardPage },
    { path: 'detail', component: GameDetails }    

];

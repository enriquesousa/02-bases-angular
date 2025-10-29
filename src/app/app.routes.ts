import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';

export const routes: Routes = [

    { path: '', component: CounterPageComponent, title: 'Home Page | Counter' },
    { path: 'hero', component: HeroPageComponent, title: 'Hero Page | Display' },

];

import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { Hero2PageComponent, HeroPageComponent } from './pages/hero/hero-page';

export const routes: Routes = [

    { path: '', component: CounterPageComponent, title: 'Home Page | Counter' },
    { path: 'hero', component: HeroPageComponent, title: 'Hero Page | Display' },
    { path: 'hero-tarea', component: Hero2PageComponent, title: 'Hero Page | Tarea' },

];

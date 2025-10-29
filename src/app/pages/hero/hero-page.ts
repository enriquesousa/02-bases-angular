import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.html',
    styleUrl: './hero-page.css',
    // Para quitar el zoneJs y solo trabajar con señales
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    constructor() {

    }

    getHeroDescription() {
        return `${ this.name() } - ${ this.age() } años`;
    }

    changeHeroName(newName: string) {
        this.name.set(newName);
        // if ( newName === 'Spiderman' ) {
        //     this.age.set(22);
        // }
    }

    getHeroNameUppercase() {
        return this.name().toUpperCase();
    }

    changeHeroAge(newAge: number) {
        this.age.set(newAge);
    }

    changeHeroNameAndAge(newName: string, newAge: number) {
        this.name.set(newName);
        this.age.set(newAge);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

}

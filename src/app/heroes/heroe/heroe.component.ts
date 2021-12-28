import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    // declaración de variables
    nombre: string = 'Ironman';
    edad: number = 22;

    // esto es un getter
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    // esto es un método o función
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 23;
    }

}

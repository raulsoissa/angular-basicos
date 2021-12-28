import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // se importan los componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // aca van las cosas que quiero hacer públicas fuera de este componente
    exports: [
        ListadoComponent
    ],
    // aca van modulos
    imports: [
        // la utilidad de CommonModule es 
        CommonModule,
    ],

})
export class HeroesModule {

} 
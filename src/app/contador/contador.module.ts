import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    // se importan los componentes
    declarations: [
        ContadorComponent
    ],
    // aca van las cosas que quiero hacer públicas fuera de este componente
    exports: [
        ContadorComponent
    ],
    imports: [
    ],

})
export class ContadorModule {

} 
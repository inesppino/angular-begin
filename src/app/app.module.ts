import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';
import { MiTercerComponenteComponent } from './mi-tercer-componente/mi-tercer-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpStrInterpolationComponent } from './cmp-databinding/cmp-str-interpolation/cmp-str-interpolation.component';
import { CmpPropertyBindingComponent } from './cmp-databinding/cmp-property-binding/cmp-property-binding.component';
import { CmpEventBindingComponent } from './cmp-databinding/cmp-event-binding/cmp-event-binding.component';
import { CmpTwoWayBindingComponent } from './cmp-databinding/cmp-two-way-binding/cmp-two-way-binding.component';
import { CmpMiPropioTwoWayBindingComponent } from './cmp-databinding/cmp-mi-propio-two-way-binding/cmp-mi-propio-two-way-binding.component';
import { CmpRefPlantillaComponent } from './cmp-databinding/cmp-ref-plantilla/cmp-ref-plantilla.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { CmpAComponent } from './cmp-input-output/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-input-output/cmp-b/cmp-b.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoublePipe } from './cmp-pipes/double.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { HidePipe } from './cmp-pipes/hide.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { PowermodeDirective } from './cmp-directivas/powermode.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    MiTercerComponenteComponent,
    CmpDatabindingComponent,
    CmpStrInterpolationComponent,
    CmpPropertyBindingComponent,
    CmpEventBindingComponent,
    CmpTwoWayBindingComponent,
    CmpMiPropioTwoWayBindingComponent,
    CmpRefPlantillaComponent,
    CmpInputOutputComponent,
    CmpAComponent,
    CmpBComponent,
    CmpPipesComponent,
    DoublePipe,
    ReversePipe,
    CmpDirectivasComponent,
    HidePipe,
    FiltroPipe,
    MarcarDirective,
    PowermodeDirective,
    CmpServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

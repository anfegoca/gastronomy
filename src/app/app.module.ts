import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CulturaComponent } from './cultura/cultura.component';
import { CulturaService } from './cultura.service';
import { ProductoCulturalComponent } from './producto-cultural/producto-cultural.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { ListaRestaurantesComponent } from './lista-restaurantes/lista-restaurantes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CulturaComponent,
    ProductoCulturalComponent,
    BarraNavegacionComponent,
    ListaRecetasComponent,
    ListaRestaurantesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    CulturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

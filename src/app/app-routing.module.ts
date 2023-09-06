import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturaComponent } from './cultura/cultura.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ProductoCulturalComponent } from './producto-cultural/producto-cultural.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'cultura/:id', component: CulturaComponent},
  { path: 'cultura/:id/productos', component: ProductoCulturalComponent},
  { path: 'cultura/:id/recetas', component: ListaRecetasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

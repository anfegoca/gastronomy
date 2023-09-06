import { Injectable } from '@angular/core';
import { ProductoCultural, Receta } from './categorias-platos';
import { RECETAS } from './categorias-platos';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  private recetas: Receta[] = RECETAS;

  getProductos(): Receta[] {
    return this.recetas;
  }

  getProductoPorId(id: number | undefined): Receta[] | undefined {
    return this.recetas.filter((receta) => receta.culturaGastronomicaId === id);
  }

}

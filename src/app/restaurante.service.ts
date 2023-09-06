import { Injectable } from '@angular/core';
import {  RESTAURANTES, Restaurante } from './categorias-platos';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  private restaurantes: Restaurante[] = RESTAURANTES;

  getRestaurantesPorCultura(culturaId: number): Restaurante[] {
    // Filtra los restaurantes por la cultura gastronómica seleccionada
    return this.restaurantes.filter((restaurante) =>
      restaurante.culturasGastronomicas.includes(culturaId)
    );
  }
}

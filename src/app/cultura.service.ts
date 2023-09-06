import { Injectable } from '@angular/core';
import { CULTURAS_GASTRONOMICAS } from './categorias-platos'; // Importa los datos de culturas desde tu archivo

@Injectable({
  providedIn: 'root'
})
export class CulturaService {
  private culturas = CULTURAS_GASTRONOMICAS; // Almacena los datos de las culturas

  getCulturas() {
    return this.culturas;
  }

  getCulturaPorId(id: number) {
    return this.culturas.find(cultura => cultura.id === id);
  }
}

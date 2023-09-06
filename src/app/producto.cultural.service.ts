import { Injectable } from '@angular/core';
import { ProductoCultural } from './categorias-platos';
import { PRODUCTOS } from './categorias-platos';

@Injectable({
  providedIn: 'root',
})
export class ProductoCulturalService {
  private productos: ProductoCultural[] = PRODUCTOS;

  getProductos(): ProductoCultural[] {
    return this.productos;
  }

  getProductoPorId(id: number | undefined): ProductoCultural[] | undefined {
    return this.productos.filter((producto) => producto.idCultura === id);
  }

}

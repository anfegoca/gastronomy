import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../restaurante.service';
import { Restaurante } from '../categorias-platos';

@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.component.html',
  styleUrls: ['./lista-restaurantes.component.css'],
})
export class ListaRestaurantesComponent implements OnInit {
  restaurantes: Restaurante[] = [];

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService
  ) {}

  ngOnInit(): void {
    const culturaId = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantes = this.restauranteService.getRestaurantesPorCultura(
      culturaId
    );
  }
}

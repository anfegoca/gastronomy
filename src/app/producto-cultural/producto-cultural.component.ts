import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoCultural } from '../categorias-platos';
import { ProductoCulturalService } from '../producto.cultural.service';
@Component({
  selector: 'app-producto-cultural',
  templateUrl: './producto-cultural.component.html',
  styleUrls: ['./producto-cultural.component.css']
})
export class ProductoCulturalComponent implements OnInit {
  productos: ProductoCultural[] | undefined;
  culturaId: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private productoCulturalService: ProductoCulturalService
  ) {}

  ngOnInit() {
    this.culturaId = Number(this.route.snapshot.paramMap.get('id'));
    this.productos = this.productoCulturalService.getProductoPorId(this.culturaId);
  }
}

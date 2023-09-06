import { Component, OnInit } from '@angular/core';
import { Receta } from '../categorias-platos';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../receta.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {
  recetas: Receta[] | undefined;
  culturaId: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.culturaId = Number(this.route.snapshot.paramMap.get('id'));
    this.recetas = this.recetaService.getProductoPorId(this.culturaId);
  }
  getVideoUrl(receta: Receta): SafeResourceUrl | null {
    if (receta.video) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(receta.video);
    }
    return null; // Si la receta no tiene video, devuelve null
  }
}

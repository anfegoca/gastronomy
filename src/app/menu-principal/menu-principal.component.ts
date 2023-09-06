import { Component, OnInit } from '@angular/core';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  culturas: any[] = []

  constructor(private culturaService: CulturaService) { }

  ngOnInit() {
    this.culturas = this.culturaService.getCulturas();
  }
}

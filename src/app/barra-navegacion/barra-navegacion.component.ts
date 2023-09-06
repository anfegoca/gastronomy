import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {
  @Input() nombreMenu: string = 'Menu principal'
  @Input() opcion1: string = 'Opcion1'
  @Input() opcion2: string = 'Opcion2'
  @Input() opcion3: string = 'Opcion3'
  @Input() op2: boolean = false
}

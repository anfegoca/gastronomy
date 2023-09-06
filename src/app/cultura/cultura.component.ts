import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent implements OnInit {
  cultura: any;

  constructor(
    private route: ActivatedRoute,
    private culturaService: CulturaService
  ) {}

  ngOnInit() {

    const culturaId = this.route.snapshot.paramMap.get('id');
    const idComoNumero = Number(culturaId);
    this.cultura = this.culturaService.getCulturaPorId(idComoNumero) || {};
  }
}

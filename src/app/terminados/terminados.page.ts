import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.page.html',
})
export class TerminadosPage {
  constructor(public deseosService: DeseosService) {}

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }
}

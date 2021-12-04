import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html',
})
export class ListasComponent {
  @Input() terminada = false;

  constructor(public deseosService: DeseosService, private router: Router) {}

  listaSeleccionada(lista: Lista) {
    this.router.navigate(['agregar'], {
      queryParams: { titulo: lista.titulo, lista: { ...lista } },
    });
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }
}

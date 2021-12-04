import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.page.html',
})
export class AgregarPage {
  titulo: any;
  lista: Lista;
  nombreItem: string;
  miLista: any;

  constructor(
    public deseosService: DeseosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.titulo = JSON.stringify(params.get('titulo'));
      this.titulo = this.titulo.replace(/['"]+/g, '');

      if (params.get('lista')) {
        this.lista = new Lista(this.titulo);

        this.miLista = this.activatedRoute.snapshot.queryParamMap.get('lista');

        // this.miLista = JSON.stringify(params.get('lista'));
        // this.miLista = this.miLista.replace(/['"]+/g, '');
        console.log('milista');
        console.log(this.miLista);
      } else {
        this.lista = new Lista(this.titulo);
        this.deseosService.agregarLista(this.lista);
      }
    });
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.deseosService.guardarStorage();

    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter(
      (itemData) => !itemData.completado
    ).length;

    if (pendientes === 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.deseosService.guardarStorage();
  }

  borrarItem(idx: number) {
    this.lista.items.splice(idx, 1);
    this.deseosService.guardarStorage();
  }

  // volverPendientes() {
  //   this.router.navigate(['pendientes']);
  // }
}

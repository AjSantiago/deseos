import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminadosPage } from './terminados.page';

const routes: Routes = [
  {
    path: '',
    component: TerminadosPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminadosPageRoutingModule {}

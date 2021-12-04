import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'pendientes',
    loadChildren: () =>
      import('./pendientes/pendientes.module').then(
        (m) => m.PendientesPageModule
      ),
  },
  {
    path: 'agregar',
    loadChildren: () =>
      import('./agregar/agregar.module').then((m) => m.AgregarPageModule),
    data: { data: 'nuevaLista' },
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

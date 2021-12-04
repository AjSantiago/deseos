import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pendientes',
        loadChildren: () =>
          import('../pendientes/pendientes.module').then(
            (m) => m.PendientesPageModule
          ),
      },
      {
        path: 'terminados',
        loadChildren: () =>
          import('../terminados/terminados.module').then(
            (m) => m.TerminadosPageModule
          ),
      },

      // {
      //   path: '',
      //   redirectTo: '/tabs/pendientes',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/pendientes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

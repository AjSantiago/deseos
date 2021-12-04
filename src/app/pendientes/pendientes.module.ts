import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PendientesPage } from './pendientes.page';
import { PendientesPageRoutingModule } from './pendientes-routing.module';
import { FiltroCompletadoPipe } from '../pipes/filtro-completado.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PendientesPageRoutingModule,
  ],
  declarations: [PendientesPage, FiltroCompletadoPipe],
})
export class PendientesPageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TerminadosPage } from './terminados.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TerminadosPageRoutingModule } from './terminados-routing.module';
import { FiltroCompletadoPipe } from '../pipes/filtro-completado.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TerminadosPageRoutingModule,
  ],
  declarations: [TerminadosPage, FiltroCompletadoPipe],
})
export class TerminadosPageModule {}

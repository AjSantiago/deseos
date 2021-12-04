import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarPage } from './agregar.page';
import { AgregarPageRoutingModule } from './agregar-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, AgregarPageRoutingModule],
  declarations: [AgregarPage],
})
export class AgregarPageModule {}

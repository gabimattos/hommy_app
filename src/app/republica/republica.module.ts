import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepublicaPageRoutingModule } from './republica-routing.module';

import { RepublicaPage } from './republica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepublicaPageRoutingModule
  ],
  declarations: [RepublicaPage]
})
export class RepublicaPageModule {}

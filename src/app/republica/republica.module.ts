import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrMaskerModule } from 'br-mask'; 

import { IonicModule } from '@ionic/angular';

import { RepublicaPageRoutingModule } from './republica-routing.module';

import { RepublicaPage } from './republica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepublicaPageRoutingModule,
    BrMaskerModule,
    ReactiveFormsModule,

  ],
  declarations: [RepublicaPage]
})
export class RepublicaPageModule {}

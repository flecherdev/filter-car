import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { MaterializeModule } from '../materialize/materialize.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarComponent,
    CarsComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    MaterializeModule,
    FormsModule
  ]
})
export class CarModule { }

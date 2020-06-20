import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarRoutingModule,
    CarComponent,
    CarsComponent
  ]
})
export class CarModule { }

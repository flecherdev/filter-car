import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../core/model/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor() { }

  ngOnInit() {
    // console.log(this.car);
  }

}

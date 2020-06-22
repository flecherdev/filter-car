import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/model/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [
    {
      title: 'Lifan X70 2.0 Vvt-i Cvt',
      image: './assets/S3-File-1579186087304-19.jpg',
      year: '2019',
      banner: '0km',
      precio: '1500000',
      precioOnline: '1500000',
      moneda: '$',
      score: '5',
      caracteristica: 'Nafta transmision manual'
    },
    {
      title: 'Lifan X70 2.0 Vvt-i Cvt',
      image: './assets/S3-File-1579186087304-19.jpg',
      year: '2019',
      banner: '0km',
      precio: '1500000',
      precioOnline: '1500000',
      moneda: '$',
      score: '5',
      caracteristica: 'Nafta transmision manual'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}

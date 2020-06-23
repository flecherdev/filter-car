import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/model/car';
import { CarsService } from '../../../core/services/cars/cars.service';
import { Doc } from '../../../core/model/doc';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [CarsService]
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  data: Doc;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.carsService.getAllDoc().subscribe( (doc: [] ) => {
      this.fechDataCar(doc);
    });
  }

  fechDataCar(data: []) {

    data['docs'].map( myCar => {
      let car: Car = {};

      console.log(myCar['caracteristicas'][5] );

      car.title = myCar['titulo'];
      car.banner = myCar['banner'];
      car.caracteristica = `${ myCar['caracteristicas'][5]['caracteristica'] } ${ myCar['caracteristicas'][5]['valor'] }`;
      car.image = myCar['imagenes'][0]['ruta'];
      car.moneda = myCar['moneda'];
      car.precio = myCar['precio'];
      car.precioOnline = myCar['precioonline'];
      car.score = myCar['scoring'];
      car.year = myCar['year'];
      
      this.cars.push(car);
    });

  }

}

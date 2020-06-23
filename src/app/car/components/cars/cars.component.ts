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

  ok: boolean = false;
  usado: boolean = false;
  automatico: boolean = false;
  manual: boolean = false;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.fetchAll();
  }

  async fetchAll() {
    this.carsService.getAllDoc().subscribe((doc: []) => {
      //console.log(doc);
      this.cars = this.fechDataCar(doc);
    });
  }

  fechDataCar(data: []) {
    const cars: Car[] = [];
    data['docs'].map( myCar => {
      let car: Car = {};
      // console.log(myCar['caracteristicas'][5] );

      car.title = myCar['titulo'];
      car.banner = myCar['banner'];
      car.caracteristica = `${ myCar['caracteristicas'][5]['caracteristica'] } ${ myCar['caracteristicas'][5]['valor'] }`;
      car.image = myCar['imagenes'][0]['ruta'];
      car.moneda = myCar['moneda'];
      car.precio = myCar['precio'];
      car.precioOnline = myCar['precioonline'];
      car.score = myCar['scoring'];
      car.year = myCar['year'];
      car.transmision = myCar['caracteristicas'][3]['valor'];
      cars.push(car);
    });
     console.log(cars);
    return cars;
  }

  fillCars(find: string) {
    this.fetchAll();
    setTimeout(() => {
      const carsTemp: Car[] = [];

      switch (find) {
        case 'ok':
          this.usado = false;
          this.cars.map( car => {
            if (car.banner === '0KM') {
              carsTemp.push(car);
            }
          });
          this.cars = carsTemp;
          break;
        case 'usado':
          this.ok = false;
          this.cars.map( car => {
            if (car.banner !== '0KM') {
              carsTemp.push(car);
            }
          });
          this.cars = carsTemp;
          break;
        case 'automatico':
          this.manual = false;
          this.cars.map( car => {
            if (car.transmision !== 'Automática') {
              carsTemp.push(car);
            }
          });
          this.cars = carsTemp;
          break;
        case 'manual':
          this.automatico = false;
          this.cars.map( car => {
            if (car.transmision !== 'Manual') {
              carsTemp.push(car);
            }
          });
          this.cars = carsTemp;
          break;

        default:
          break;
      }
    }, 1000);
    
    
    
  }

}
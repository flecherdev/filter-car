import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDoc() { 
    this.http.get<any[]>(`${environment}`);
  }


}

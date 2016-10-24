import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Plant } from '../../model/plants/plant.model';
import { PLANTS } from '../../mocks/plants/plants-mock';

@Injectable()
export class PlantService {

  constructor(private http: Http) {
  }

   getAll(): Promise<Plant[]> {
    return Promise.resolve(PLANTS);
  }
}
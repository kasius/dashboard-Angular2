import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Customer } from '../../model/customers/Customer.model';
import { CUSTOMERS } from '../../mocks/customers/Customer-mock';

@Injectable()
export class CustomerService {

  constructor(private http: Http) {
  }

   getAll(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }
}
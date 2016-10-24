import { Component, OnInit } from '@angular/core';

import { Customer } from '../model/customers/customer.model';
import { PLANTS } from '../mocks/plants/plants-mock';

import { CustomerService } from '../services/customers/customer.service';

@Component({
  selector: 'customers',
  styleUrls: ['./customers.css'],
  templateUrl: './customers.html',
  providers: [CustomerService]
})
export class Customers implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(): void {
    this.customerService.getAll().then(customers => this.customers = customers);
  }
}

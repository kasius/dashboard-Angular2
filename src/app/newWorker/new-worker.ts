import { Component } from '@angular/core';
import { Work } from '../workers/work';
import { WORKES } from '../workers/workers-mock';
import { Router } from '@angular/router';
import { WorkService } from '../workers/workers.service';
import { AccountService } from '../services/account.service';


import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-worker',
  templateUrl: './new-worker.html',
  styleUrls: ['./new-worker.css'],
  providers: [WorkService, AccountService]
})
export class NewWorker {
  // forNewWorker = true;
  worker = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
    rr: false,
    ohsas: false,
    geyser: false
  };
  workers: Work[];

  constructor(private workService: WorkService, private _route: Router, private accountService: AccountService) { }

  newHero(data) {
    if (data.rr == true) {
      this.accountService.registerRelayRace(data).subscribe(
        // response => this.response = response, 
        error => console.error('Error: '),
        () => this._route.navigate(['workers'])
      );
    }
    if (data.geyser == true) {
      this.accountService.registerGeyser(data).subscribe(
        // response => this.response = response, 
        error => console.error('Error RR: '),
        () => this._route.navigate(['workers'])
      );
    }
    if (data.ohsas == true) {
      debugger;
      this.accountService.registerOhsas(data).subscribe(
        // response => this.response = response, 
        error => console.error('Error RR: '),
        () => this._route.navigate(['workers'])
      );
    }
  }
}

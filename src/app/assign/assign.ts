import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {WorkService} from '../workers/workers.service';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'assign',
  styleUrls: ['./assign.css'],
  templateUrl: './assign.html',
  providers: [WorkService, AccountService]
})
export class Assign implements OnInit {
  private id;
  private sub: any;

  worker = {
    name:"",
    lastName:"",
  };

   modelCuentas = {
      rr: false,
      ohsas: false,
      geyser: false
    };

  constructor(private route: ActivatedRoute, private workService: WorkService, private accountService: AccountService) {}

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        var userId = params['id'];
        debugger;
        if(userId){
            this.workService.getWorker(userId)
            .subscribe(
                worker => this.worker = worker, 
                error => console.error('Error:'),
                () => console.log(this.worker)
              );
        }
      });
    }
    asignarAccesoPlataformas(cuentas:modelCuentas){
      debugger;
      console.log("cuentas");
      console.log(cuentas);

      if(cuentas.rr == true){
        this.accountService.registerRelayRace(this.worker)
          .subscribe(
              worker => this.worker = worker, 
              error => console.error('Error:'),
              () => console.log(this.worker)
            );
      }else if(cuentas.geyser == true){
        this.accountService.registerGeyser(this.worker)
            .subscribe(
                worker => this.worker = worker, 
                error => console.error('Error:'),
                () => console.log(this.worker)
              );
      }
    }
}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { WorkService } from '../workers/workers.service';
import { PlantService } from '../services/plant.service';
import { ChargeService } from '../services/charge.service';
import { AccountService } from '../services/account.service';

//MODELS
import { Plant } from '../model/plant.model';
import { Charge } from '../model/charge.model';
import { PlantCharge } from '../model/plantCharge.model';

@Component({
  selector: 'assign',
  styleUrls: ['./assign.css'],
  templateUrl: './assign.html',
  providers: [WorkService, PlantService, ChargeService]
})
export class Assign implements OnInit {
  private id;
  private sub: any;

  worker = {
    name: "",
    lastName: "",
  };

  chargeWorker: "";

  plants: Plant[];
  charges: Charge[];

  response: "";

  modelAssig = new PlantCharge();

  constructor(private route: ActivatedRoute, private workService: WorkService, private plantService: PlantService, private chargeService: ChargeService, private accountService: AccountService) {
    
   }
// this.chargeWorker = worker.charge; this.plantWorker = worker.plants;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var userId = params['id'];
      this.modelAssig.geyserUserId = userId;
      if (userId) {
        this.workService.getWorker(userId)
          .subscribe(
          worker => this.worker = worker,  
          error => console.error('Error:'),
          );
        this.plantService.getPlants()
          .subscribe(
          plants => this.plants = plants,
          error => console.error('Error:'),
          () => console.log(this.plants)
          );
        this.chargeService.getCharges()
          .subscribe(
          charges => this.charges = charges,
          error => console.error('Error:'),
          () => console.log(this.charges)
          );
      }
    });
  }
  asignarAccesoPlataformas() {
    if (this.modelAssig.plantId === "" || this.modelAssig.chargeId === "") {
      alert("debe ingresar planta y cargo!!!");
    } else {
      this.accountService.asignacionPlantCharge(this.modelAssig)
        .subscribe(
        response => this.response = response,
        error => console.error('Error:'),
        () => console.log("response: " + this.response)
        );
    }
  }
  getValuePlants(elementId) {
    this.modelAssig.plantId = elementId;
    debugger;
  }
  getValueCharges(elementId) {
    this.modelAssig.chargeId = elementId;
    debugger;
  }
}

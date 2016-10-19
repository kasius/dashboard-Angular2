import { Component, OnInit } from '@angular/core';
import { Work } from './work';
import { NewWorker } from '../newWorker/new-worker';
import { WorkService } from './workers.service';


import { Location } from '@angular/common';
import { WORKES } from '../workers/workers-mock';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'workers',
  styleUrls: ['./workers.css'],
  templateUrl: './workers.html',
  providers: [WorkService]
})

export class Workers implements OnInit {
  title = 'Tour of Workers';
  selectedWork: Work;

  errorMessage: string;
  model = new Work();
  workers: Work[];
  workersRelayRace: Work[];
  submitted = true;
  forNewWorker = true;
  prueba = {
    id: 0,
    name: "",
    lastName: "",
    age: 0,
    mail: ""
  };

  // sliderValue:number = 20;

  private id: number;
  private sub;

  constructor(private workService: WorkService, private _route: Router, private _routeParams: ActivatedRoute) {

  }
  onSubmit(data) {
    var info = data;
    var newWork = {
      id: 5,
      name: data.name,
      lastName: data.lastName,
      age: data.age,
      mail: data.mail
    };
    
    // this.addWorker(newWork);
    this.submitted = true;
  }
  active = true;
  getWorkers(): void {
    // this.workService.getWorkers().then(workers => this.workers = workers);
    this.workService.getPeople()
      .subscribe(
      prueba => this.workers = prueba,
      error => console.error('Error: '),
      () => console.log(this.workers)
      );
  }
  getWorkersRelayRace(): void {
    this.workService.getWorkersRR()
      .subscribe(
      workersRelayRace => this.workersRelayRace = workersRelayRace,
      error => console.error('Error: '),
      () => console.log(this.workersRelayRace)
      );
  }
  ngOnInit(): void {
    this.getWorkers();
    this.getWorkersRelayRace();
  }
  onSelect(work: Work): void {
    this.submitted = false;
    this.model = work;
  }
  newWorker(): void {
    this._route.navigate(['newWorker/']);
  }
  assign(work: Work): void {
    this._route.navigate(['assign/', work.geyserUserId]);
  }
}
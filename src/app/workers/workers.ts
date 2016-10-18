import {Component, OnInit} from '@angular/core';
import {Work} from './work';
import {NewWorker} from '../newWorker/new-worker';
import {WorkService} from './workers.service';


import {Location} from '@angular/common';
import { WORKES } from '../workers/workers-mock';
import {Router} from '@angular/router';
import { RouterModule }   from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Workers',
  styleUrls: ['./workers.css'],
  templateUrl: './workers.html',
  providers: [WorkService],
  directives: [NewWorker]
})

export class Workers implements OnInit {
  title = 'Tour of Workers';
  selectedWork: Work;

  errorMessage: string;
  model = new Work();
  workers: Work[];
  submitted = true;
  forNewWorker = true;
  prueba = {
    id:0,
    name:"",
    lastName:"",
    age:0,
    mail:""
  };

  private id: number;
  private sub;

  constructor(private workService: WorkService, private _route:Router,private _routeParams: ActivatedRoute) {
    workService.getPeople()
      .subscribe(
        prueba => this.workers = prueba, 
        error => console.error('Error: ' + err),
        () => console.log(this.workers)
      );
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
    this.submitted = true; }
  active = true;
  getWorkers(): void {
    this.workService.getWorkers().then(workers => this.workers = workers);
    console.log(this.workService.getWorkers().then(workers => this.workers = workers));
  }
  ngOnInit(): void {
    this.getWorkers();
  }
  onSelect(work: Work): void {
    this.submitted = false;
    this.model = work;
  }
  newWorker(): void{
    this._route.navigate(['newWorker']);
  }
  assign(work: Work): void{
    this._route.navigate(['assign/',work.aspNetUserId]);
  }
}


// import { PeopleService } from './peopleService';

// @Component({
//   selector: 'my-app',
//   template: `<div *ng-for="let person of people">{{person.name}}</div>`
// })
// export class App {
//   constructor(peopleService: PeopleService) {
//     peopleService.getPeople()
//       .subscribe(
//         people => this.people = people,
//         error => console.error('Error: ' + err),
//         () => console.log('Completed!')
//       );
//   }
// }
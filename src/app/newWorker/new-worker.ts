// import {Component} from '@angular/core';

// @Component({
//   selector: 'newWorker',
//   styleUrls: ['./new-worker.css'],
//   templateUrl: './new-worker.html',
// })

// export class NewWorker {
// }

import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { Work }    from '../workers/work';
import {WorkService} from '../workers/workers.service';
import { WORKES } from '../workers/workers-mock';

@Component({
  selector: 'newWorker',
  templateUrl: './new-worker.html',
  providers: [WorkService]
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  errorMessage: string;
  model = new Work();
  workers: Work[];
  submitted = false;
  constructor(private workService: WorkService,private router: Routes) { }
  onSubmit(data) { 
    var info = data;
    var newWork = {
      name: data.name,
      lastName: data.lastName,
      age: data.age,
      mail: data.mail
    };
    this.addWorker(newWork);
    debugger;
    this.submitted = true; }
  active = true;
  newHero() {
    this.model = new Work();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  addWorker (work: Work) {
    debugger;
    if (!work) { return; }
    var data = WORKES;
    data.push(work);

    var nuevosValores = data;
    var nuevosValores2 = WORKES;
    debugger;
    // this.router.navigate( ['/']);
    // this.router.path("/some/path");
    // this.router.url === '/login'
    window.location.pathname = '/';
    // this.workService.addWorker(work)
    //                  .subscribe(
    //                    work  => this.workers.push(work),
    //                    error =>  this.errorMessage = <any>error);
  }
}

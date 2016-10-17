import { Component } from '@angular/core';
import {Work}    from '../workers/work';
import { WORKES } from '../workers/workers-mock';
import {Router} from '@angular/router';
import {WorkService} from '../workers/workers.service';


import {Location} from '@angular/common';
import { RouterModule }   from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-worker',
  templateUrl: './new-worker.html',
  providers: [WorkService]
})
export class NewWorker{
  // forNewWorker = true;
  worker = new Work();
  workers: Work[];

  constructor(private workService: WorkService, private _route:Router) { }

  newHero(data){
    debugger;
    // this.workService.pushWorker(data);
    this.workService.pushWorker(data).subscribe(
      // prueba => this.workers = prueba, 
        error => console.error('Error: '),
        () => this._route.navigate(['workers'])
      //  data => {
      //    this._route.navigate(['workers']);
      //  },
      //  error => {
      //    console.error("Error saving food!");
      //   //  return Observable.throw(error);
      //  }
    );
    return true;
  }
}

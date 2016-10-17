import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {WorkService} from '../workers/workers.service';

@Component({
  selector: 'assign',
  styleUrls: ['./assign.css'],
  templateUrl: './assign.html',
  providers: [WorkService]
})
export class Assign implements OnInit {
  private id;
  private sub: any;

  constructor(private route: ActivatedRoute, private workService: WorkService) {}

    ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       var userId = params['id'];
       debugger;
       if(userId){
           this.workService.getWorker(userId);
       }
    });
  }
}

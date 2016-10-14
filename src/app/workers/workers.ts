import {Component, OnInit} from '@angular/core';
import {Work} from './work';
import {WorkService} from './workers.service';

@Component({
  selector: 'Workers',
  styleUrls: ['./workers.css'],
  templateUrl: './workers.html',
  providers: [WorkService]
})

export class Workers implements OnInit {
  title = 'Tour of Workers';
  workers: Work[];
  selectedWork: Work;
  constructor(private workService: WorkService) { }
  getWorkers(): void {
    this.workService.getWorkers().then(workers => this.workers = workers);
  }
  ngOnInit(): void {
    this.getWorkers();
  }
  onSelect(work: Work): void {
    this.selectedWork = work;
  }
}
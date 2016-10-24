import { Component, OnInit } from '@angular/core';

import { Plant } from '../model/plants/plant.model';
import { PLANTS } from '../mocks/plants/plants-mock';

import { PlantService } from '../services/plants/plants.service';

@Component({
  selector: 'plants',
  styleUrls: ['./plants.css'],
  templateUrl: './plants.html',
  providers: [PlantService]
})

export class Plants implements OnInit {
  plants: Plant[];

  constructor(private plantService: PlantService) {

  }

  ngOnInit(): void {
    this.getPlantas();
  }
  getPlantas(): void {
    this.plantService.getAll().then(plants => this.plants = plants);
  }
}

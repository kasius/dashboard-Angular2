import { Injectable } from '@angular/core';

import { Work } from './work';
import { WORKES } from './workers-mock';

@Injectable()
export class WorkService {
  getWorkers(): Promise<Work[]> {
    return Promise.resolve(WORKES);
  }
}

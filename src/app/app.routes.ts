import {Routes} from '@angular/router';
import {Users} from './users/users';
import {Workers} from './Workers/Workers';
import {Customers} from './customers/customers';
import {Plants} from './plants/plants';
import {NewWorker} from './newWorker/new-worker';
import {Assign} from './Assign/Assign';
import { RouterModule }   from '@angular/router';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'workers', pathMatch: 'full'},
  {path: 'workers', component: Workers},
  {path: 'users', component: Users},
  {path: 'plants', component: Plants},
  {path: 'customers', component: Customers},
  {path: 'newWorker', component: NewWorker},
  {path: 'assign/:id', component: Assign}
];


import {Routes} from '@angular/router';
import {Users} from './users/users';
import {Workers} from './Workers/Workers';
import {Business} from './business/business';
import {Plants} from './plants/plants';
import {HeroFormComponent} from './newWorker/new-worker';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'workers', pathMatch: 'full'},
  {path: 'workers', component: Workers},
  {path: 'users', component: Users},
  {path: 'plants', component: Plants},
  {path: 'business', component: Business},
  {path: 'newWorker', component: HeroFormComponent},
];


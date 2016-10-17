import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Users} from './users/users';
import {Workers} from './Workers/Workers';
import {NewWorker} from './newWorker/new-worker';
import {WorkService} from './Workers/Workers.service';

import {Business} from './business/business';
import {Plants} from './plants/plants';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, Users, Workers, Business, Plants, NewWorker],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [WorkService],
  bootstrap   : [AppComponent]
})

export class AppModule {

}



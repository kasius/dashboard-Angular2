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
import {Assign} from './Assign/Assign';
import {WorkService} from './Workers/Workers.service';
import {AccountService} from './services/account.service';


import {Customers} from './customers/customers';
import {Plants} from './plants/plants';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, Users, Workers, Customers, Plants, NewWorker,Assign],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [WorkService, AccountService],
  bootstrap   : [AppComponent]
})

export class AppModule {

}



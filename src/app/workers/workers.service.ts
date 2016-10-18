import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Work } from './work';
import { WORKES } from './workers-mock';

@Injectable()
export class WorkService {
  constructor(private http: Http) {
  }
  getPeople() {
    var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
    var authHeader = new Headers();
    if (token) {
      authHeader.append('Authorization', 'Bearer ' + token);
    }

    return this.http.get('http://geyserwebapi.azurewebsites.net/api/GeyserUsers', {
      headers: authHeader
    })
      .map(res => res.json());
  }
  pushWorker(data: Work) {
    // var body = data;
    var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    let body = JSON.stringify(data);
    return this.http.post('http://geyserwebapi.azurewebsites.net/api/Account/Register', body, { headers: headers })
      .map(response => response.json());
  }

  getWorkers(): Promise<Work[]> {
    var data = this.getPeople();
    console.log("data");
    console.log(data);
    return Promise.resolve(WORKES);
  }

  getWorkersRR() {
    debugger;
    var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
    var authHeader = new Headers();
    if (token) {
      authHeader.append('Authorization', 'Bearer ' + token);
    }

    return this.http.get('https://relayracewebapi.azurewebsites.net/api/RelayRaceUsers', {
      headers: authHeader
    })
    .map(res => res.json());
  }

  getWorker(id: string) {
    var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
    var authHeader = new Headers();
    if (token) {
      authHeader.append('Authorization', 'Bearer ' + token);
    }

    return this.http.get('http://geyserwebapi.azurewebsites.net/api/GeyserUsers/' + id, { headers: authHeader })
      .map(res => res.json());
  }
}
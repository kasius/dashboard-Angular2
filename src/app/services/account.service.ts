import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {Account} from '../model/account.model';
import { PlantCharge } from '../model/plantCharge.model';

@Injectable()
export class AccountService {
    constructor(private http: Http) {
    }

    registerRelayRace(account: Account) {
        var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(account);
        return this.http.post('https://relayracewebapi.azurewebsites.net/api/Account/Register', body, { headers: headers })
            .map(response => response.json());
    }
    registerGeyser(account: Account) {
        debugger;
        var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(account);
        return this.http.post('https://geyserwebapi.azurewebsites.net/api/Account/Register', body, { headers: headers })
            .map(response => response.json());
    }
    registerOhsas(account: Account){
        debugger;
        var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(account);
        return this.http.post('https://ohsascloudapi.azurewebsites.net/api/Account/Register', body, { headers: headers })
            .map(response => response.json());
    }
    asignacionPlantCharge(plantCharge: PlantCharge){
        debugger;
        var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        let body = JSON.stringify(plantCharge);
        return this.http.put('https://geyserwebapi.azurewebsites.net/api/GeyserUsers', body, { headers: headers })
            .map(response => response.json());
    }
}
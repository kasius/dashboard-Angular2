import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChargeService {
    constructor(private http: Http) {
    }

    getCharges() {
        var token = "2skwZVyMoSATgSPHl78rQdnwyCJCLuRLeMYnsOthJ7e02UQU6aBt9mT4si9NRNmMiFu9zQkNF2S7Xu-PxEQUDWiGdTW3gEgtqaZ0dVBehcDc8ffNaBr3qLChzNnd4FAVJehzu9pZi5plELNscHdTLj5K_FelYczAPJNHkJWMnPhA9cZ-5SxiePMsckPlEEhMJaordu-bJbetw1YxaR8WlXpDsI6ear4v-TQEoFV_vZbQjETi7MOnehLhRQNQVQhL4VjUA1-m_ihGvMTBYWE6PBVMOeYfAhwSGd3_8RL4j-zsFG56FbN0-TataXuEOYM9bB4MfXrm5OcH0fvaExLdmqXxj63VgG_XvwfDENm6ycDxKJll3DvNmmu19SRUKKjIhmlAGkLHPQ1JFZzDDoRcy_XWsy1dhngOVtmCgGL81oStX9FahHBw_qULvXiiv_pdc5vC2MB4u9dk6q59SiR4X9I3EZI5XlNfeRy-doBZiWx0HY6mRaVz2CX1UlkrWgqMM-izXyqFF2Mkk_P0VWO2a6aZZJfX86zS_wfMyIHl3tY";
        var authHeader = new Headers();
        if (token) {
            authHeader.append('Authorization', 'Bearer ' + token);
        }

        return this.http.get('http://geyserwebapi.azurewebsites.net/api/Charge', {
            headers: authHeader
        })
            .map(res => res.json());
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiEndpoint = environment.apiEndpoint;

    constructor(private http: HttpClient){

    }
    getApiData(){
        return this.http.get(this.apiEndpoint);

    }

  
}

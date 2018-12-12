import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
	fetchSpecificData:any;

    constructor(private http: HttpClient){

    }
    setCategorySpecificData(getSpecificData){
       this.fetchSpecificData = getSpecificData;

    }
	
	 getCategorySpecificData(){
      return this.fetchSpecificData;

    }
  
}

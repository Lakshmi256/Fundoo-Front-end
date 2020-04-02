import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  private _autoRefresh$ = new Subject();
   
  
  get autoRefresh$() {
    return this._autoRefresh$;
  }


  private API_URL=environment.labelsUrl;
  private token=(localStorage.token)
  private httpOptions ={
      headers:new HttpHeaders({'content-type':'application/json'})
      
  };
  constructor(private httpservice:HttpService){

  }

  getAlllabel(): Observable<any> { 
       
    return this.httpservice.get(this.API_URL+environment.getalllabels,{headers:new HttpHeaders({'token':this.token})});
    console.log("lp1")
}

}
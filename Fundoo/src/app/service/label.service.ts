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
  createlabel(label :any): Observable<any> { 
       
    return this.httpservice.post(this.API_URL+'/create',label,{headers:new HttpHeaders({'token':this.token})});
   
}
  getAlllabel(): Observable<any> { 
       
    return this.httpservice.get(this.API_URL+environment.getalllabels,{headers:new HttpHeaders({'token':this.token})});
    console.log("lp1")
}
deletelabel(label :any): Observable<any> { 
       
  return this.httpservice.delete(this.API_URL+'/delete/'+label.labelId,{headers:new HttpHeaders({'token':this.token})});
 
}
createandmaplabel(label :any,noteId:any): Observable<any> { 
       
  return this.httpservice.post(this.API_URL+environment.createadmap+'?noteId='+noteId,label,{headers:new HttpHeaders({'token':this.token})});
 
}
addlabel(labelId :any,noteId:any): Observable<any> { 
       
  return this.httpservice.post(this.API_URL+environment.maplabel+labelId+'?noteId='+noteId,{},{headers:new HttpHeaders({'token':this.token})});
 
}
getlabelnotes(labelId :any): Observable<any> { 
       
  return this.httpservice.get(this.API_URL+environment.getlabelnotes+'?labelId='+labelId,{headers:new HttpHeaders({'token':this.token})});
 
}
removemaping(labelId :any,noteId:any): Observable<any> { 
       
  return this.httpservice.post(this.API_URL+environment.removemaplabel+labelId+'?noteId='+noteId,{},{headers:new HttpHeaders({'token':this.token})});
 
}
}
import{Injectable} from '@angular/core';
import{HttpHeaders,HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';
import {observable} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UserServiceService{
    private API_URL=environment.apiUrl;
    private httpOptions ={
        headers:new HttpHeaders({'content-type':'application/json'})
    };
    constructor(private http:HttpClient){}
    registration (user: any) observable<any>{ 
        return this.http.post<any>(this.API_URL+environment.registerUrl,user,this.httpOptions);
    }
}

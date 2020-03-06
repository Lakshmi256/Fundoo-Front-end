import{Injectable} from '@angular/core';
import{HttpHeaders,HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';
import{Observable} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UserServiceService{
    private API_URL=environment.apiUrl;
    private httpOptions ={
        headers:new HttpHeaders({'content-type':'application/json'})
    };
    constructor(private http:HttpClient){}

    registration(user: any): Observable<any> { 
        return this.http.post<any>(this.API_URL+environment.registerUrl,user,this.httpOptions);
        console.log(this.API_URL)
    }

    login(user: any): Observable<any> { 
        return this.http.post<any>(this.API_URL+environment.loginUrl,user,this.httpOptions);
        console.log(this.API_URL)
    }
     forgotPassword(user: any): Observable<any> { 
        return this.http.post<any>(this.API_URL+environment.forgotpassurl+user.email,this.httpOptions);
        console.log(this.API_URL)
    }

}

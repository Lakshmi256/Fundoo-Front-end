import{Injectable}  from '@angular/core';
import{HttpHeaders} from '@angular/common/http';
import{environment} from 'src/environments/environment';
import{Observable, from} from 'rxjs';
import{HttpService} from './httpservice.service'

@Injectable({
    providedIn:'root'
})
export class UserServiceService{
    private API_URL=environment.apiUrl;
    private httpOptions ={
        headers:new HttpHeaders({'content-type':'application/json'})
        
    };
    constructor(private httpservice:HttpService){}

    registration(user: any): Observable<any> { 
        return this.httpservice.post(this.API_URL+environment.registerUrl,user,this.httpOptions);
        
    }

    login(user: any): Observable<any> { 
        return this.httpservice.post(this.API_URL+environment.loginUrl,user,this.httpOptions);
        
    }
     forgotPassword(user: any): Observable<any> { 
        return this.httpservice.post(this.API_URL+environment.forgotpassurl,user,this.httpOptions);
    }
    resetPassword(user: any): Observable<any> { 
        return this.httpservice.put(this.API_URL+environment.resetPassword,user,{headers:new HttpHeaders({"token":localStorage.token})});
    }
    addCollaborator(user: number,email:any): Observable<any> { 
        return this.httpservice.post(environment.addcolalb+'?email='+email+'?noteId='+user,{},{headers:new HttpHeaders({"token":localStorage.token})});
    }
    

}

import{Injectable}  from '@angular/core';
import{HttpHeaders} from '@angular/common/http';
import{environment} from 'src/environments/environment';
import{Observable, from} from 'rxjs';
import{HttpService} from './httpservice.service'

@Injectable({
    providedIn:'root'
})
export class NoteServiceService{
    private API_URL=environment.notesUrl;
    private token=(localStorage.token)
    private httpOptions ={
        headers:new HttpHeaders({'content-type':'application/json'})
        
    };
    constructor(private httpservice:HttpService){}

    createNote(user: any): Observable<any> { 
        return this.httpservice.post(this.API_URL+environment.createNote,user,{headers:new HttpHeaders({'token':this.token})});
        
    }
    updateNote(user: any): Observable<any> { 
        return this.httpservice.put(this.API_URL+environment.updateNote,user,{headers:new HttpHeaders().get(this.token)});
        
    }
    getAllNote(): Observable<any> { 
        return this.httpservice.get(this.API_URL+environment.updateNote,{headers:new HttpHeaders().get(this.token)});
        
    }
}
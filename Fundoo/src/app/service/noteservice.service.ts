import{Injectable}  from '@angular/core';
import{HttpHeaders} from '@angular/common/http';
import{environment} from 'src/environments/environment';
import{Observable, from, Subject, BehaviorSubject} from 'rxjs';
import{HttpService} from './httpservice.service'
import { Note } from '../model/note';

@Injectable({
    providedIn:'root'
})
export class NoteServiceService{
    
  
    private _autoRefresh$ = new Subject();
   
  
    get autoRefresh$() {
      return this._autoRefresh$;
    }


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
        return this.httpservice.put(this.API_URL+environment.updateNote,user,{headers:new HttpHeaders({'token':this.token})});
        
    }
    getAllNote(): Observable<any> { 
       
        return this.httpservice.get(this.API_URL+environment.getAllNotes,{headers:new HttpHeaders({'token':this.token})});
        console.log("lp1")
    }
    getPinnedAllNote(): Observable<any> { 
        
        return this.httpservice.get(this.API_URL+environment.getPinNote,{headers:new HttpHeaders({'token':this.token})});
        console.log("lp3")
    }
    pinNote(note:any): Observable<any> { 
        return this.httpservice.get(this.API_URL+environment.pinNote+note.id,{headers:new HttpHeaders({'token':this.token})});
        
    }
    getArchieveNote(): Observable<any> { 
       
        return this.httpservice.get(this.API_URL+environment.getArchieveNote,{headers:new HttpHeaders({'token':this.token})});
        console.log("lp1")
    }
    gettrashedNote(): Observable<any> { 
       
        return this.httpservice.get(this.API_URL+environment.getTrashNotes,{headers:new HttpHeaders({'token':this.token})});
        console.log("lp1")
    }







       

}
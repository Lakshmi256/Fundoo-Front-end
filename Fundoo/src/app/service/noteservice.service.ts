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
    private noteId;

    private notesList = new Subject<any>();
    private pinNoteList = new Subject<any>();
    private archiveNoteList = new Subject<any>();
    private trashedNoteList = new Subject<any>();
    private searchNoteData=new Subject<any>();
    private content = new BehaviorSubject<number>(0);
    private pincontent = new BehaviorSubject<boolean>(false);
  
    private _autoRefresh$ = new Subject();
    public share = this.content.asObservable();
    public sharepin = this.pincontent.asObservable();
  
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







    setNotesList(message: Note[]) {
        this.notesList.next({ notes: message });
      }
      getNotesList(): Observable<any> {
        console.log("getNotesListService Call");
        return this.notesList.asObservable();
      }
      setPinNotesList(message: Note[]) {
        this.pinNoteList.next({ notes: message });
      }
      getPinNotesList(): Observable<any> {
        return this.pinNoteList.asObservable();
      }















}
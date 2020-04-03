import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetnotesService {
notes:Note[]
pinNoteList:Note[]
archievenotes:Note[]
trashednotes:Note[]
private searchNoteData=new Subject<any>();
  constructor() { }




  setNotesList(message: Note[]) {
    this.notes=message
  }
  getNotesList(){
  
    return this.notes

  }
  setPinNotesList(message: Note[]) {
    this.pinNoteList=message
  }
  getPinNotesList() {
   return this.pinNoteList
  }
  setarchieveNotesList(message: Note[]) {
    this.archievenotes=message
  }
  getarchieveNotesList() {
   return this.archievenotes
  }
  setaTrashedNotesList(message: Note[]) {
    this.trashednotes=message
  }
  getTrashedNotesList() {
   return this.trashednotes
  }
  setSearchNoteData(message:any){
    return this.searchNoteData.next({notes:message});
  }
  getSearchNoteData():Observable<any>{
    return this.searchNoteData.asObservable();
  }
}

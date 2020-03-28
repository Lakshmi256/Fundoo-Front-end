import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class GetnotesService {
notes:Note[]
pinNoteList:Note[]
  constructor() { }




  setNotesList(message: Note[]) {
    this.notes=message
    console.log('notes---',this.notes);
  }
  getNotesList(){
    console.log("getNotesListService Call");
    // if(t)
    return this.notes

  }
  setPinNotesList(message: Note[]) {
    this.pinNoteList=message
  }
  getPinNotesList() {
   return this.pinNoteList
  }
}

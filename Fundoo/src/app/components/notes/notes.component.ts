import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  [x: string]: any;
  note: Note = new Note();
  popup: boolean = false;
  notes:Note[];
  getAllNotes: [];
  pinnotes: Note[];
  unpinnotes:Note[];

  constructor(private noteservice: NoteServiceService,
     private router: Router) { }

  ngOnInit() {
    // this.noteservice.autoRefresh$.subscribe(()=>{
    //   this.displayNotes();
    // }); 
    this.displayNotes();
  }

  public displayNotes() {
    let getPinnedNotes = this.noteservice.getPinnedAllNote();
    this.noteservice.getAllNote().subscribe((response: any) => {
      this.notes = response.note;
      this.setnotes();
    })
    this.noteservice.getPinnedAllNote().subscribe(
      (data) => {
        console.log("Pin Notes"+data.data);
        this.pinnotes = data.note;
        this.setpinnotes();
    })
   
  }
  setnotes() {
    console.log("setNotes");
    this.noteService.setNotesList(this.notes);
  }
  setpinnotes() {
    console.log("setPinNotes");
    this.noteService.setPinNotesList(this.pinnotes);
  }
  
}
 
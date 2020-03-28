import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { Router } from '@angular/router';
import { GetnotesService } from 'src/app/service/getnotes.service';

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
  archievenotes:Note[];

  constructor(private noteservice: NoteServiceService,private notess:GetnotesService,
     private router: Router) { }

  ngOnInit() {
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
        this.pinnotes = data.note;
        
        this.setpinnotes();
    })
    this.noteservice.getArchieveNote().subscribe(
      (data) => {
        this.archievenotes = data.note;
        
        this.setarchievenotes();
    })
  }
  setnotes() {
    this.notess.setNotesList(this.notes);
  }
  setpinnotes() {
    this.notess.setPinNotesList(this.pinnotes);
  }
  setarchievenotes(){
    this.notess.setarchieveNotesList(this.archievenotes);
  }
}
 
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

  constructor(private noteservice: NoteServiceService,private notess:GetnotesService,
     private router: Router) { }

  ngOnInit() {
   this.displayNotes();
  }

  public displayNotes() {
    let getPinnedNotes = this.noteservice.getPinnedAllNote();
    this.noteservice.getAllNote().subscribe((response: any) => {
      this.notes = response.note;
      // console.log('sjdksjd',this.notes);
      
      this.setnotes();
    })
    this.noteservice.getPinnedAllNote().subscribe(
      (data) => {
        console.log("Pin Notes"+data.note);
        this.pinnotes = data.note;
        console.log('lp',this.pinnotes);
        
        this.setpinnotes();
    })
   
  }
  setnotes() {
    // console.log("setNotes");
    this.notess.setNotesList(this.notes);
  }
  setpinnotes() {
    console.log("setPinNotes");
    this.notess.setPinNotesList(this.pinnotes);
  }
  
}
 
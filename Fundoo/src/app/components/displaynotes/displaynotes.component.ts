import { Component, OnInit, Inject, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetnotesService } from 'src/app/service/getnotes.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  [x: string]: any;
  note: Note = new Note();
  popup: boolean = false;
  notes:Note[];
  getAllNotes: [];
  pinnotes: Note[];
  unpinnotes:Note[];

  constructor(private noteservice: NoteServiceService,private Notes:GetnotesService,
     private router: Router) { }

  ngOnInit() {
  
    this.displayNotes();
  }

  displayNotes() {
    // console.log(this);
    
 
 
    console.log("Display Notes Call");
   console.log(this.Notes.getNotesList());
  
    {
      this.notes = this.Notes.getNotesList()
      // console.log(this.notes);
    };
    // this.noteService.getPinNotesList().subscribe(message => {
    //   console.log("Display PinNotes Call");
    //   this.pinnotes = message.notes;
    //   console.log(this.pinNotes);
    // });
  }
  
}
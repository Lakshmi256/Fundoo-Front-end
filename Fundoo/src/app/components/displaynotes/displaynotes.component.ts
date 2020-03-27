import { Component, OnInit, Inject, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(private noteservice: NoteServiceService,
     private router: Router) { }

  ngOnInit() {
    // this.noteservice.autoRefresh$.subscribe(()=>{
    //   this.displayNotes();
    // }); 
    this.displayNotes();
  }

  displayNotes() {
    this.trashedNotes = false;
    this.archiveNotes = false;
    this.labelNotes=false;
    this.trashEmpty=false;

    console.log("Display Notes Call");
    this.noteService.getNotesList().subscribe(message => {
      this.notes = message.notes;
      console.log(this.notes);
    });
    this.noteService.getPinNotesList().subscribe(message => {
      console.log("Display PinNotes Call");
      this.pinnotes = message.notes;
      console.log(this.pinNotes);
    });
  }
  




 

}
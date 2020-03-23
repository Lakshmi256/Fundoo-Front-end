import { Component, OnInit, Inject } from '@angular/core';
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

  public displayNotes() {
    let getPinnedNotes = this.noteservice.getPinnedAllNote();
    this.noteservice.getAllNote().subscribe((response: any) => {
      console.log(response);
      this.notes = response.list;
    })
    this.noteservice.getPinnedAllNote().subscribe(
      (data) => {
        console.log("Pin Notes"+data.data);
        this.pinnotes = data.list;
    })
   
  }
  
  closeClick(newNote: any) {
    console.log(this.note.title);
    console.log(this.note.discription);
    this.updateNote(newNote);
  }
  onClickNoteId(id) {
    this.noteservice.pinNote(id);
  }
  



  token(newNote: any, id: any, token: any) {
    throw new Error("Method not implemented.");
  }
  getAllPinNotes() {
    this.noteservice.getAllNote().subscribe((response: any) => {
      console.log(response);
      this.notes = response.obj;
    });
  }

}
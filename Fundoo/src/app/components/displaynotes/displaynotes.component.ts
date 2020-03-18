import { Component, OnInit, Inject } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { Note } from 'src/app/model/note';
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
  Token = localStorage.getItem('token');
  popup: boolean = false;
  notes:Note[];
  getAllNotes: [];
  pinnotes: Note[];
  unpinnotes:Note[];

  private dialogref: any;
  constructor(private noteservice: NoteServiceService, public dialog: MatDialog,public dialogRef: MatDialogRef<DisplaynotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    this.noteservice.autoRefresh$.subscribe(()=>{
      this.displayNotes();
    }); 
    this.displayNotes();
  }

  public displayNotes() {
    let getPinnedNotes = this.noteservice.getPinnedAllNote();
    this.noteservice.getAllNote().subscribe((response: any) => {
      console.log(response);
      this.notes = response.data;
    })
    this.noteservice.getPinnedAllNote().subscribe(
      (data) => {
        console.log("Pin Notes"+data.data);
        this.pinnotes = data.data;
    })
    this.noteservice.getAllNote().subscribe(
      (data) => {
        console.log("Unpin Notes"+data.data);
        this.unpinnotes = data.data;
      }
    );
  }
  
  closeClick(newNote: any) {
    console.log(this.note.title);
    console.log(this.note.discription);
    this.updateNote(newNote);
  }
  onClickNoteId(id) {
    this.noteservice.pinNote(id);
  }
  
  openDialog(note: any) {
    console.log("open" + note.id);

  //   this.dialogref = this.dialog.open(UpdatenoteComponent, {
  //     panelClass: 'custom-dialog-container',
  //     width: '500px',
  //     data: { note }
  //   });
  // }

  // updateNote(newNote) {
  //   this.noteservice.updateNote(newNote, localStorage.getItem('token'), this.note.id).subscribe(response => {
  //     console.log(response.obj);
  //     // this.dialogRef.close();
  //   },
  //     error => {
  //       console.log("error");
  //     })
  // }
  // token(newNote: any, id: any, token: any) {
  //   throw new Error("Method not implemented.");
  // }
  // getAllPinNotes() {
  //   this.noteservice.getAllNotes(localStorage.getItem('token')).subscribe((response: any) => {
  //     console.log(response);
  //     this.notes = response.obj;
  //   });
  // }
  }
}
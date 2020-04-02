import { Component, OnInit, Input, Inject } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pin-notes',
  templateUrl: './pin-notes.component.html',
  styleUrls: ['./pin-notes.component.scss']
})
export class PinNotesComponent implements OnInit {

  [x: string]: any;
  @Input() note: Note;
  isPinned: boolean;
  Token=localStorage.getItem('token');

  constructor( private noteService: NoteServiceService, private snackBar: MatSnackBarModule,
  public dialog: MatDialog, private sanitizer: DomSanitizer, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  pinnedNote() {
    console.log(this.note.id);
    this.noteService.pinNote(this.note).subscribe(response => {
      if (this.note.isPinned) {
        this.isPinned = true;
        this.matSnackBar.open("Note unPinned Successfully", 'Ok', { duration: 3000 });
      }
      else if (!this.note.isPinned) {
        this.isPinned = false;
        this.matSnackBar.open("Note Pinned Successfully", 'Ok', { duration:3000 });
      
      }
      console.log(response);
      // this.dialogRef.close();
    },
      (error: any) => {
        console.log("error");
      });
  }
  
}
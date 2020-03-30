import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/service/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() note: Note;
  Id: number;
  isArchieved: boolean = false;
  constructor( private noteService:NoteServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
archieveNote(){
   {
    this.noteService.archieveNote(this.note.id).subscribe((response) => {
     
      if (this.note.isArchieved == true) {

        this.snackBar.open("UnArchived", "OK", { duration: 5000 });
      }
      if (this.note.isPinned = true) {
        this.snackBar.open("Note unpinned and Archived", "OK", { duration: 5000 });
      }
      else {
        this.snackBar.open("Note Archived", "OK", { duration: 5000 });
      }

    },
      error => {
        this.snackBar.open("error in Note thrash operation", "OK", { duration: 5000 });
      });
  }
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  popup:boolean=false;
  note:Note = new Note();
  noteId:Note[];
  Token=localStorage.getItem('token');
  isPinned:boolean;

  constructor(private router:Router,private noteservice: NoteServiceService, private snackbar:MatSnackBar ) { }
  
  ngOnInit() {
  }

  onSubmit() {
    console.log()
    {
      this.noteservice.createNote(this.note).subscribe(notes=> {
        this.note = new Note();
        console.log(this.note);
        this.snackbar.open('Note Created', 'OK', {duration:3000});
      },
      (error: any) => {
        this.snackbar.open(error.error.description, 'error', {duration:3000});
      });
    }
  }

  onPopup() {
    this.popup=true;
  }


}


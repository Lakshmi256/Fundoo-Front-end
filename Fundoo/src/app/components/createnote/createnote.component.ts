import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  popup:boolean=false;
  note:Note = new Note();
  noteId:Note[];
  createNoteForm:FormGroup;
 
  isPinned:boolean;

  constructor(private formBuilder: FormBuilder,private router:Router,private noteservice: NoteServiceService, private snackbar:MatSnackBar ) { }
  
  ngOnInit() {
    this.createNoteForm = this.formBuilder.group({
      title:[''],
      description:[''],
    }
    )
  }

  onSubmit() {
    console.log(this.createNoteForm.value)
    {
      this.noteservice.createNote(this.createNoteForm.value).subscribe(notes=> {
        this.note = new Note();
    
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


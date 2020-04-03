import { Component, OnInit, Inject } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  note:Note;
  constructor(public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NoteServiceService,private snackbar:MatSnackBar) {
      this.note=this.data.note;
     }
    
  ngOnInit() {
  }
  onSubmit(){
    this.dialogRef.close();
    this.noteService.updateNote(this.note).subscribe((response)=>{
        this.snackbar.open("Note Updated SuccessFully","ok",{duration:5000});
    },
    (error:any)=>{

    }
    
    );
  }
}
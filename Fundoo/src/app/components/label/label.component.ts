import { Component, OnInit, Inject } from '@angular/core';
import { Note } from 'src/app/model/note';
import { Label } from 'src/app/model/label';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/service/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  notes: Note[];
  labels: Label[];
  noteId: number;
  labelId:number;
  name:string="";
  label:Label=new Label()

  constructor(public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private labelservice: LabelService, private matSnackBar: MatSnackBar) { 
      this.noteId=data.note.id;
       console.log(this.noteId);
       
      this.labelservice.getAlllabel().subscribe(
        (data) => {
          
          this.labels = data.labels;
          
      })
      
    }
    ngOnInit() {

    }

    onClickCreateLabel(noteId){
      
      this.labelservice.createlabel(this.label).subscribe((response)=>{
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
        
      });
      this.labelservice.addlabel(this.labelId,noteId).subscribe((response)=>{
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
      });
    }
    onCheckedAddLabel(labelId) {
      console.log("mat on checked label called");
      this.labelservice.addlabel(labelId,this.noteId).subscribe((response)=>{
        this.matSnackBar.open("label mapped", "Ok", { duration: 3000 });
      },
        (error) => {
          this.matSnackBar.open("error", "Ok", { duration: 3000 });
        });
    }
}

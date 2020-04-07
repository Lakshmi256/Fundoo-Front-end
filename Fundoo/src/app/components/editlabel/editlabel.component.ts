import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'src/app/model/label';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/service/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {
labels:Label[]
label:Label=new Label()
  constructor(public dialogRef: MatDialogRef<EditlabelComponent>,private labelService:LabelService,private matSnackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      this.labelService.getAlllabel().subscribe(
        (data) => {
          
          this.labels = data.labels;
          
      })
    }

  ngOnInit(): void {
  }
  onClickCreateLabel(label:any){
    // document.getElementById("textfield1").value = "";
 
      this.labelService.createlabel(label).subscribe((response)=>{
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
      });
  }
  onClickDeleteLabel(label){
    this.labelService.deletelabel(label).subscribe((response)=>{
      this.matSnackBar.open("Label Deleted","Ok",{duration:3000});
    });
  }
}

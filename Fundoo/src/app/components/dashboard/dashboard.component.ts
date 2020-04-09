import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/service/label.service';
import { GetnotesService } from 'src/app/service/getnotes.service';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewserviceService } from 'src/app/service/viewservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  labels: Label[];
  notes: Note[];
  title: String;
  description: String;
 label:Label=new Label()
 labelnotes:Note[]
  constructor(private router:Router,private viewservice:ViewserviceService,private labelService:LabelService,private notess:GetnotesService,private setnotes:GetnotesService,private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getlabels()
  }
  getlabels(){
this.labelService.getAlllabel().subscribe(
  (data) => {
    console.log(data.labels)
    this.labels = data.labels;
    console.log(this.labels)
})


  }
  onsignout(){
    localStorage.clear;
    this.router.navigate(['/login'])
  }
  searchNote() {
    
    this.setnotes.setSearchNoteData(this.title);
    //this.setnotes.setSearchNoteData(this.description);
  }
  openDialog(labels:Label[]): void {
    const dialogRef = this.dialog.open(EditlabelComponent, {
      width: '450px',
      height: 'auto',

      data: { labels }
    });
    dialogRef.afterClosed().subscribe(result => {
   
    });
  }
  displaynotelabels(labelId){
    this.labelService.getlabelnotes(labelId).subscribe((data)=>{
      this.labelnotes=data.note;
      this.setlabelNotes();
    });
  }
  setlabelNotes(){
    this.notess.setlabelNotes(this.labelnotes);
  }
  list: boolean = true;
  grid: boolean = false;

  changeView() {
    if (this.list) {
      this.grid = true;
      this.list = false;
    }
    else {
      this.list = true;
      this.grid = false;
    }
    this.viewservice.getView();
  }
}

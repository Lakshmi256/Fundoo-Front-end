import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/service/label.service';
import { GetnotesService } from 'src/app/service/getnotes.service';

import { EditlabelComponent } from '../editlabel/editlabel.component';
import { MatDialog } from '@angular/material/dialog';


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
 
  constructor(private router:Router,private labelService:LabelService,private setnotes:GetnotesService,private dialog: MatDialog,) { }

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
}

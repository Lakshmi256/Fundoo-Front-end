import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/service/label.service';
import { GetnotesService } from 'src/app/service/getnotes.service';


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
  constructor(private router:Router,private labelService:LabelService,private setnotes:GetnotesService) { }

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
    console.log();
    this.setnotes.setSearchNoteData(this.title||this.description);
  }
  
}

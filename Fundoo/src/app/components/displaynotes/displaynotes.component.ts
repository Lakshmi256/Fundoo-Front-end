import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteservice.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(private noteService:NoteServiceService) { }

  ngOnInit(): void {
  }
  

}

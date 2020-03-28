import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { GetnotesService } from 'src/app/service/getnotes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
archievednotes:Note[]
note:Note=new Note()
  constructor(private getnotes:GetnotesService) { }

  ngOnInit(): void {
    this.archievednotes=this.getnotes.getarchieveNotesList()
  }

}

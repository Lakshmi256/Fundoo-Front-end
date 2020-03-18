import { Component, OnInit, Inject } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { Note } from 'src/app/model/note';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {


  ngOnInit() {
   
  }
}

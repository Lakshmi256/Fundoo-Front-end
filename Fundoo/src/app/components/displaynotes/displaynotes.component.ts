import { Component, OnInit, Inject, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { GetnotesService } from 'src/app/service/getnotes.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  [x: string]: any;
  note: Note = new Note();
  popup: boolean = false;
  notes:Note[];
  getAllNotes: [];
  pinnotes: Note[];
  unpinnotes:Note[];
  trash:boolean=false;
  archieve:boolean=false;
  searchnote:any;
  searchNotes:boolean;
  constructor(private Notes:GetnotesService,private dialog: MatDialog,
     private router: Router,private route:ActivatedRoute) { 
       
     }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      this.param = params['page'] || '';
      if (this.param == "archive") {
        
        this.getArchieveNote();
      }
      else  if (this.param == "trash") {
       
        this.getTrashNote();
      }
      else  if (this.param == "labels") {
       
        this.getlabelnotes();
      }
      else{
      this.displayNotes();
      }
    });
    this.getSearchNoteData();
  }

  displayNotes() {
    
 

      this.trash=false;
      this.archieve=false;
      this.notes = this.Notes.getNotesList()

      this.pinnotes = this.Notes.getPinNotesList()

  }
  getTrashNote(){
    this.trash=true;
    this.archieve=false;
    this.notes=this.Notes.getTrashedNotesList()
  }
  getArchieveNote(){
    this.trash=false;
    this.archieve=true;
    this.notes=this.Notes.getarchieveNotesList()
  }
  openDialog(note): void {
    console.log("note Id:" + note.id);
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: 'auto',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getSearchNoteData(){
    this.Notes.getSearchNoteData().subscribe((message)=>{
      console.log("search data",message.notes);
        this.searchnote=message.notes;
        this.note=message.notes;
        this.searchNotes=true;
        if(message.notes==""){
          this.searchNotes=false;
        }
    });
  }
  getlabelnotes(){
    this.notes=this.Notes.getlabelNotes();
  }
}
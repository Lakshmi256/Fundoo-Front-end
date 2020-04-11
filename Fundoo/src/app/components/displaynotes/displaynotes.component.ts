import { Component, OnInit, Inject, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { GetnotesService } from 'src/app/service/getnotes.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { ViewserviceService } from 'src/app/service/viewservice.service';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/service/label.service';

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
  label:Label=new Label()
  lab:boolean=false;
  trash:boolean=false;
  archieve:boolean=false;
  searchnote:any;
  searchNotes:boolean;
  direction:string="row";
  view: any;
  constructor(private Notes:GetnotesService,private dialog: MatDialog,private viewservice:ViewserviceService,
    private snackBar:MatSnackBar,private labelservice:LabelService,
     private router: Router,private route:ActivatedRoute,private noteservice:NoteServiceService) { 
      this.viewservice.getView().subscribe(
        (res) => {
                    this.view = res;
                    this.direction = this.view.data;
                    console.log("direction..................."+this.view.data)
                    console.log(this.direction);
                     
          });  
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
    
 
this.lab=false
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
    this.lab=true;
    this.notes=this.Notes.getlabelNotes();
  }
  onClickDelete(id){

  }
  onClickRestore(id){

  }
  onDeleteRem(note){
    this.noteservice.removeremainder(note).subscribe((response) => {
      this.snackBar.open("remainder added", 'ok', { duration: 5000 });
    },
      error => {
        this.C.open("error adding remainder", 'ok', { duration: 5000 });
  
      }
    );
  }
  removemapping(noteId,labelId){
    this.labelservice.removemaping(labelId,noteId).subscribe((response)=>{
      this.snackBar.open("label unmapped", "Ok", { duration: 3000 });
    },
      (error) => {
        this.snackBar.open("error", "Ok", { duration: 3000 });
      });
  }

}
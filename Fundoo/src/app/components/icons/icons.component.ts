import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/service/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() note: Note;
  id: number;
 
  constructor( private noteService:NoteServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  
archieveNote(){
  console.log('id---',this.note.id);
  
   
    this.noteService.archieveNote(this.note).subscribe((response) => {
     
      if (this.note.isArchieved == true) {

        this.snackBar.open("UnArchived", "OK", { duration: 5000 });
      }
      if (this.note.isPinned = true) {
        this.snackBar.open("Note unpinned and Archived", "OK", { duration: 5000 });
      }
      else {
        this.snackBar.open("Note Archived", "OK", { duration: 5000 });
      }

    },
      error => {
        this.snackBar.open("error in Note archieve operation", "OK", { duration: 5000 });
      });
  }
  arrayOfColors = [
    [
      { color: "white", name: "white" },
      { color: "red", name: "red" },
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(200, 232, 104)", name: "yellow" },
      
    
      
    ],
    [
      
      { color: "rgb(97, 191, 82)", name: "green" },
      {color:"rgb(185, 247, 238)",name:"teal"},
      { color: "rgb(153, 221, 255)", name: "light blue" },
      { color: "darkblue", name: "darkblue" },
     
    ],
    [

      { color: "purple", name: "purple" },
      { color: "deeppink", name: "pink" },
      { color: " brown", name: "brown" },
      { color: "slategray", name: "grey" },
    
     
    ]
  ]
  // setColor(color){

  // }
}

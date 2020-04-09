import { Component, OnInit, Inject } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice.service';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  onenote: any;
  email: any;
user:UserModel=new UserModel()
  collarr: any;  
  
  
  
  email1 = new FormControl();
  message:string;
  ToData: any[];
  constructor(private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.onenote = this.data;  //gets id from icon component
   
  }

  ngOnInit() {
    this.email = localStorage.getItem('emailUser');
   
  }
  
  writeEmail() {
    console.log(this.email1.value);
    let addColl = {
      "email ": this.email1.value
    }
    console.log("Add coll-->", addColl);
        this.userService.addCollaborator(this.onenote.noteId,this.email1.value).subscribe((res: any) => {
  console.log("Getting all collab users--->", res);

    })
  }

}
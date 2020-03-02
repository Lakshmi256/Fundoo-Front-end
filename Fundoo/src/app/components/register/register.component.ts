import { Component, OnInit } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar';
import {NgForm, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServiceService} from 'src/app/service/userservice.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(private userservice: UserServiceService,
    private router :Router,private snackbar:MatSnackBar){
      
    }




  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      password:new FormControl(''),
    })
  }

  onSubmit(form:NgForm){
    if (this.registerForm.invalid){
      return;
    }
    this.userservice.registration(this.registerForm.value).subscribe((user)=>{
      this.snackbar.open('registaration succefull','ok',{duration:3000});
    },
    (error:any)=>{
      this.snackbar.open(error.error.discription,'error',{duration:3000});

    }
    );

  }

}

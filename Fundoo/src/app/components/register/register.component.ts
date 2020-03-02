import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor() { }

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

  }

}

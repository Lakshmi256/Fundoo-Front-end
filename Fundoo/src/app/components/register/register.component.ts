import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  showSpinner: boolean = false;
  user: UserModel = new UserModel();
  registerForm: FormGroup;
  submitted: boolean = false;
  hide = true;
  hide2=true;
  showMsg: boolean = false;
  constructor(private formBuilder: FormBuilder,  private userservice: UserServiceService, private matSnackBar: MatSnackBar, private router: Router) {   }

  onRegisterSubmit() {
    this.showSpinner = true;
    this.userservice.registration(this.registerForm.value).subscribe((user) => {
      this.router.navigate(['/login']);
      this.showMsg = true;
      this.submitted = true;
      this.matSnackBar.open('Registration Successfull ', 'ok', { duration: 4000 });
  
    },
      (error: any) => {
     
        this.matSnackBar.open('Bad Creaditial', 'ok', { duration: 4000 });
      });
      if (this.registerForm.invalid) {
        return;
    }
  }
  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      
      
    },
    
    );
  }
  get f() { return this.registerForm.controls; }

}
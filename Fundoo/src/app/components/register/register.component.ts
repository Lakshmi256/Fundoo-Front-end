import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
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
    console.log("---------------------------------------");
    this.userservice.registration(this.registerForm.value).subscribe((user) => {
      this.router.navigate(['/login']);
      this.showMsg = true;
      this.submitted = true;
      this.matSnackBar.open('Registration Successfull Please Verify Account Before Login', 'ok', { duration: 4000 });
      this.showSpinner = false;
     
    },
      (error: any) => {
        this.showSpinner = false;
        this.matSnackBar.open('Bad Creaditial', 'ok', { duration: 4000 });
        console.log(error)
      });
      if (this.registerForm.invalid) {
        return;
    }
  }
  ngOnInit() {
    console.log("ngoninit---------------------------------------");
    
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      
      mobile_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      
      
    },
    
    );
  }
  get f() { return this.registerForm.controls; }

}
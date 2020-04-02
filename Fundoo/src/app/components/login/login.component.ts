import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showSpinner: boolean = false;
  user: UserModel = new UserModel();
  loginForm: FormGroup;
  submitted: boolean = false;
  hide = true;
  hide2=true;
  showMsg: boolean = false;
  constructor(private formBuilder: FormBuilder,  private userservice: UserServiceService, private matSnackBar: MatSnackBar, private router: Router) {   }


  onloginSubmit() {
    this.showSpinner = true;
    this.userservice.login(this.loginForm.value).subscribe(Response => {

      localStorage.setItem("token",Response.token)

      this.router.navigate(['/dashboard/notes']);
    
      this.showMsg = true;
      this.submitted = true;
      this.matSnackBar.open('login Successfull ', 'ok', { duration: 4000 });
  
    },
      (error: any) => {
     
        this.matSnackBar.open('Bad Creaditial', 'ok', { duration: 4000 });
      });
      if (this.loginForm.invalid) {
        return;
    }
  }
  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
  
    },
    
    );
  }
  get f() { return this.loginForm.controls; }

}

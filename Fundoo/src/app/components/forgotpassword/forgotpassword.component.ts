import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  showSpinner: boolean = false;
  user: UserModel = new UserModel();
  forgotPasswordForm: FormGroup;
  submitted: boolean = false;
  hide = true;
  hide2=true;
  showMsg: boolean = false;
  constructor(private formBuilder: FormBuilder,  private userservice: UserServiceService, private matSnackBar: MatSnackBar, private router: Router) {   }


  onforgotPasswordSubmit() {
    this.showSpinner = true;
    this.userservice.forgotPassword(this.forgotPasswordForm.value).subscribe((user) => {
      this.router.navigate(['/login']);
  
      this.matSnackBar.open('reset password link sent Successfull ', 'ok', { duration: 4000 });
  
    },
      (error: any) => {
     
        this.matSnackBar.open('Bad Creaditial', 'ok', { duration: 4000 });
      });
      if (this.forgotPasswordForm.invalid) {
        return;
    }
  }
  ngOnInit() {
    
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9.%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      
    },
    
    );
  }
  get f() { return this.forgotPasswordForm.controls; }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";





import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { NotesComponent } from './components/notes/notes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { PinNotesComponent } from './components/pin-notes/pin-notes.component';
import{MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    ResetpasswordComponent,
    CreatenoteComponent,
    NotesComponent,
    DisplaynotesComponent,
    PinNotesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    FlexLayoutModule,
    MatDividerModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

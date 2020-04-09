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


import {MatMenuModule} from '@angular/material/menu';
import {OwlDateTimeModule,OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

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
import { IconsComponent } from './components/icons/icons.component';
import { SingleNoteComponent } from './components/single-note/single-note.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { UpdatenotesComponent } from './components/updatenotes/updatenotes.component';
import { NotePipe } from './components/pipe/note.pipe';
import { SearchnotePipe } from './components/pipe/searchnote.pipe';
import { EditlabelComponent } from './components/editlabel/editlabel.component';
import { LabelComponent } from './components/label/label.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';



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
    IconsComponent,
    SingleNoteComponent,
    ArchieveComponent,
    UpdatenotesComponent,
    NotePipe,
    SearchnotePipe,
    EditlabelComponent,
    LabelComponent,
    CollaboratorComponent,
  
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
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    // DlDateTimeDateModule,
    //  DlDateTimePickerModule
    OwlDateTimeModule,
    OwlNativeDateTimeModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

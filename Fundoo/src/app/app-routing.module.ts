import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import{ ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import{NotesComponent} from'./components/notes/notes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component: ForgotpasswordComponent},

  {path: 'resetpassword',component:ResetpasswordComponent},
  {path: 'dashboard',component:DashboardComponent,
children:[
  {path:'',component:NotesComponent},
  {path:"notes",component:NotesComponent},
  {path:"createnote",component:CreatenoteComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,ForgotpasswordComponent]

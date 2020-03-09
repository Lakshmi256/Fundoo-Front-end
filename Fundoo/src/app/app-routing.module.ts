import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import{ ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component: ForgotpasswordComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'resetpassword',component:ResetpasswordComponent},
  {path:'sidenav',component:SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,ForgotpasswordComponent]

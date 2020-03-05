import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import{ ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component'


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component: ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,ForgotpasswordComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { ForgotPasswordComponent } from 'src/auth/component/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/auth/component/login/login.component';
import { RegisterComponent } from 'src/auth/component/register/register.component';
import { CivilComponent } from 'src/civil/civil.component';
import { CourseComponent } from 'src/course/course.component';
import { CseComponent } from 'src/cse/cse.component';
import { HomeComponent } from 'src/home/home.component';
import { ItComponent } from 'src/it/it.component';
import { JoinnowComponent } from 'src/joinnow/joinnow.component';
import { MechanicalComponent } from 'src/mechanical/mechanical.component';
import { PreviousPapersComponent } from './previous-papers/previous-papers.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
  {path:'cse',component:CseComponent},
  {path:'it',component:ItComponent},
  {path:'civil',component:CivilComponent},
  {path:'mechanical',component:MechanicalComponent},
  { path: 'auth', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'previous-papers', component: PreviousPapersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module'; 
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllPrimeNGModule } from 'src/plugins/all-primeng.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AuthComponent, RegisterComponent, ForgotPasswordComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AllPrimeNGModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

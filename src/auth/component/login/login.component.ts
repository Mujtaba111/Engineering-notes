import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { UserProfile } from '../../models/user-profile';
import { UserapiService } from '../services/userapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserapiService,MessageService,NgxSpinnerService]
})
export class LoginComponent implements OnInit {
  userprofile: UserProfile[] = [];
  loginForm: FormGroup = this.formBuilder.group({});
  constructor(private router:Router ,private formBuilder: FormBuilder,private userapi: UserapiService, private spinner: NgxSpinnerService,private messageService: MessageService) { }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
     
      email: ['example@google.com', [Validators.required, Validators.minLength(3)]],
      password: ['Ecma123#', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {
    this.createLoginForm();
  }
login(){
  
  this.loginForm.value;
  debugger;
  this.userapi.loginuser(this.loginForm.value).subscribe((res: any) => {
    if (res.message=="Successful Login") {
      debugger;
      this.router.navigate(['user-management/dashboard']);
      sessionStorage.setItem('userProfile', JSON.stringify(res));
    }
    this.spinner.hide();
  }, err => {
    debugger;
    console.log(err);
    this.showToastMessage("error", "Error While Logging in", err.error.message);
    this.spinner.hide();
  });


  }
  showToastMessage(messageType: string, heading: string, message: string) {
    this.messageService.add({ severity: messageType, summary: heading, detail: message, life: 6000 });
  }
}


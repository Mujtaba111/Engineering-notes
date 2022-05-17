import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserapiService } from '../services/userapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserapiService,MessageService,NgxSpinnerService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder: FormBuilder,private userapi: UserapiService, private spinner: NgxSpinnerService,private messageService: MessageService) { }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      full_name: ['John Doe', [Validators.required, Validators.minLength(3)]],
      email: ['example@google.com', [Validators.required, Validators.minLength(3)]],
      password: ['Ecma123#', [Validators.required, Validators.minLength(3)]]
    });
  }
 

  ngOnInit(): void {
    this.createRegisterForm();
  }
register(){
  let dataDictionary: any = []; 

  this.registerForm.value;
  debugger;
  this.userapi.registernewuser(this.registerForm.value).subscribe((res: any) => {
    if (res) {
      debugger;
      this.showToastMessage("success", "Website Created!", res.message);
    }
    this.spinner.hide();
  }, err => {
    debugger;
    console.log(err);
    this.showToastMessage("error", "Error While Creating Website", err.message);
    this.spinner.hide();
  });


  }
  showToastMessage(messageType: string, heading: string, message: string) {
    this.messageService.add({ severity: messageType, summary: heading, detail: message, life: 6000 });
  }

}

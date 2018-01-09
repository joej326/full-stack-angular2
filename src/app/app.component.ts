import { Component } from '@angular/core';
import { BackendTestService } from './backend-test.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myVar;
  form: FormGroup;

  userInfo = {
    firstName: '',
    lastName: '',
    password: '',
    email: ''
  };

  firstName;
  lastName;
  password;
  email;



  constructor(private backendService: BackendTestService,
              private fb: FormBuilder) {
    this.createForm();
  }

  callService() {
    this.backendService.fetchData()
      .subscribe(
        (data) => {
          this.myVar = data;
        }
      );
  }

  createForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submitForm() {
    console.log('form submitted!');
    console.log(this.form);
    console.log(this.form.get('firstName').value);

    this.userInfo.firstName = this.form.get('firstName').value;
    this.userInfo.lastName = this.form.get('lastName').value;
    this.userInfo.password = this.form.get('password').value;
    this.userInfo.email = this.form.get('email').value;

    this.backendService.postData(this.userInfo);
    this.form.reset();
  }

  deleteUser(input) {
    console.log(input.value);
    this.backendService.deleteUser({body: {user: input.value}}); // httpclient's DELETE is weird so I'm mocking a body for the backend
  }
}





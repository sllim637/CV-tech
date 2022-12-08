import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  email: string = ''
  password: string = ''
  authForm: FormGroup;
  constructor() {
    this.authForm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.password,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    })
  }
  validate() {
    if (this.authForm.valid) this.authForm.reset();
  }
  ngOnInit(): void {
  }
  get emailData() {
    return this.authForm.get('email');
  }

  get passwordData() {
    return this.authForm.get('password');
  }

}

import { PasswordValidators } from './../common/validators/password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-reactive',
  templateUrl: './change-password-reactive.component.html',
  styleUrls: ['./change-password-reactive.component.css']
})
export class ChangePasswordReactiveComponent implements OnInit {

  form = new FormGroup({
    oldPassword: new FormControl('',
      Validators.required,
      [PasswordValidators.confirmPassword]
    ),
    newPassword: new FormControl('',
      Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, PasswordValidators.passwordShouldMatch);

  constructor() { }

  ngOnInit() {
  }

  get oldPassword() {
    return this.form.get('oldPassword') as FormControl;
  }
  get newPassword() {
    return this.form.get('newPassword') as FormControl;
  }
  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;
  }

  log(x) {
    console.log(x);
  }

}

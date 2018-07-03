import { UsernameValidators } from './../common/validators/username.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.css']
})
export class SignupReactiveComponent implements OnInit {
  submitted = false;
  form = new FormGroup({
    username: new FormControl('',
      [
        Validators.required,
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnique),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor() { }

  ngOnInit() {
  }

  log(f) {
    console.log(f);
  }

  login() {
    this.submitted = true;
    let values = this.form.value;
    //setting errors at form level
    setTimeout(() => {
      this.form.setErrors({
        invalidLogin: true,
        username: values.username,
        password: values.password
      });
      this.submitted = false;
    }, 200);
    console.log(this.form);
  }
  // properties 

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

}

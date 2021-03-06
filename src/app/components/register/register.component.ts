import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

function passwordMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMatch: true })
  }
  else {
    confirmPassword.setErrors(null)
  }
  return null;
}

function symbolValidator(control: any) {
  if (control.hasError('required')) {
    return null
  }
  if (control.hasError('minlength')) {
    return null
  }
  if (control.value.indexOf('@') > -1) {
    return null
  }
  else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordMatchValidator
    })
  }

  register() {
    console.table(this.registerForm.value);
  }
  /*
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('ade@g.com'),
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
    */

}

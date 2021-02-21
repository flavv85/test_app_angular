import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  email: string = 'email';
  password: string = 'password';

  isValid: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  login() {
    this.api
      .loginUser(this.loginFormGroup.value)
      .subscribe((res) => console.log(res));
    // console.log(this.loginFormGroup.value)
  }

  onChange() {
    console.log(this.loginFormGroup.valid);
    this.isValid = this.loginFormGroup.valid;
  }
}

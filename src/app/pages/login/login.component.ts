import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../../api.service';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { FirebaseApp } from '@angular/fire';

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

  constructor(
    private api: ApiService,
    public afAuth: AngularFireAuth,
    ) {}

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
  loginWithGoogle(){
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }

  onChange() {
    console.log(this.loginFormGroup.valid);
    this.isValid = this.loginFormGroup.valid;
  }
}

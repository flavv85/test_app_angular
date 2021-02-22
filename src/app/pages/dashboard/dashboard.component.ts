import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

// securizam ruta si verificam sa afisa dashboard daca avem user logat, altfel redirect catre login

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userEmail: string;
  isLogged: boolean;
  loading: boolean;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.loading = true;
    afAuth.onAuthStateChanged((user) => {
      this.loading = false;
      this.userEmail = user.email;
    });
  }
  
  logout() {
    this.afAuth.signOut();
  }

  ngOnInit(): void {}
}



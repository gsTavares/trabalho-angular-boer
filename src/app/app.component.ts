import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './@types/user';
import { HeaderWithSessionComponent } from './components/header-with-session/header-with-session.component';
import { HeaderWithoutSessionComponent } from './components/header-without-session/header-without-session.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderWithoutSessionComponent, HeaderWithSessionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedUser?: User

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {

  }
  ngOnInit(): void {
    this.loginService.loginSubject.subscribe({
      next: (value) => {
        this.isLoggedIn = value;
      }
    });
    this.loginService.loggedUserSubject.subscribe({
      next: (value) => {
        this.loggedUser = value;
      }
    })
  }

  logout(event: boolean): void {
    this.loginService.setLoginSubject(event);
    this.router.navigate(['/']);
  }

}

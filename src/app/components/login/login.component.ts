import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../@types/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;

  emailFormControl: FormControl = new FormControl();
  passwordFormControl: FormControl = new FormControl();

  loggedUser?: User

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userService: UserService,
  ) {
    this.emailFormControl.addValidators([Validators.required, Validators.email]);
    this.passwordFormControl.addValidators(Validators.required);
  }
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  login() {
    this.submitted = true;
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const user = this.userService.findByEmail(this.emailFormControl.value);
      if(user) {
        this.loginService.setLoginSubject(true);
        this.loginService.setLoggedUserSubject(user);
        this.router.navigate(['/dashboard']);
      } else {
        alert('E-mail ou senha inválidos!');
      }
    }
  }

}

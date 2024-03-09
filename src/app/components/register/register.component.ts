import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  emailFormControl: FormControl = new FormControl();
  nameFormControl: FormControl = new FormControl();
  passwordFormControl: FormControl = new FormControl();
  confirmPasswordFormControl: FormControl = new FormControl();
  termsOfServiceFormControl: FormControl = new FormControl();

  submitted: boolean = false;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.emailFormControl.addValidators([Validators.required, Validators.email]);
    this.passwordFormControl.addValidators([
      Validators.required,
      this.passwordLengthValidator(),
      this.passwordNumberValidator(),
      this.passwordSpecialCharValidator(),
      this.passwordUpperCaseValidator()
    ]);
    this.nameFormControl.addValidators(Validators.required);
    this.confirmPasswordFormControl.addValidators([
      Validators.required,
      this.passwordMatchValidator(this.passwordFormControl)
    ]);
    this.termsOfServiceFormControl.addValidators(Validators.requiredTrue);
  }

  register(): void {
    this.submitted = true;
    const registerForm: FormGroup = new FormGroup({
      email: this.emailFormControl,
      name: this.nameFormControl,
      password: this.passwordFormControl,
      confirmPassword: this.confirmPasswordFormControl,
      termsOfService: this.termsOfServiceFormControl
    });
    if (registerForm.valid) {
      if (this.userService.addUser(registerForm.value)) {
        this.loginService.setLoggedUserSubject(registerForm.value);
        this.router.navigate(['/login-screen']);
      } else {
        alert('This email was alredy used!');
      }
    }
  }

  private passwordMatchValidator(passwordFormControl: FormControl): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue = control.value;

      if (controlValue !== passwordFormControl.value) {
        return { passwordNotMatch: true };
      }

      return null;
    }
  }

  private passwordLengthValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value: string = control.value;
      const lentghRegex = /^(?=.{8,})/;

      if (!lentghRegex.test(value)) {
        return { passwordLength: true }
      }

      return null;
    }
  }

  private passwordUpperCaseValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value: string = control.value;
      const upperCaseRegex = /(?=.*[A-Z])/;

      if (!upperCaseRegex.test(value)) {
        return { passwordUpperCase: true }
      }

      return null;
    }
  }

  private passwordSpecialCharValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value: string = control.value;

      const specialCharRegex = /(?=.*[\W_])/;

      if (!specialCharRegex.test(value)) {
        return { passwordSpecialChar: true }
      }

      return null;
    }
  }

  private passwordNumberValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value: string = control.value;
      const numberRegex = /(?=.*\d)/;

      if (!numberRegex.test(value)) {
        return { passwordNumber: true }
      }

      return null;
    }
  }

}

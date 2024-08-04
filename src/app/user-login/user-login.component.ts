import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  router = inject(Router);

  userForm: FormGroup = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.authenticate(this.userForm.getRawValue()).subscribe((response) => {
      if (response.user.token) {
        localStorage.setItem('token', response.user.token);
        this.userService.currentUserSignal.set(response.user);
        this.router.navigateByUrl('/');
      } else {
        alert(response.user.message)
      }
    });
    return false;
  }
}

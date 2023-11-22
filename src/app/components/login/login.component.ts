import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/sevices/app.service';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  login() {
    if (!this.email || !this.password) {
      alert('Please fill in both email and password');
      return;
    }

    if (this.userService.authenticateUser(this.email, this.password)) {
      const user = this.userService.getUserByEmail(this.email);

      if (user) {
        sessionStorage.setItem('login', 'true');
        // Lưu tên người dùng vào sessionStorage
        sessionStorage.setItem('userName', user.name);
        location.assign('/')

      } else {
        alert('Error: User not found.');
      }
    } else {
      alert('Login unsuccessful. Please check your email and password.');
    }
  }
}

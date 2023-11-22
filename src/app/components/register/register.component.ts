import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from 'src/app/sevices/app.service';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  register() {
    if (this.name === '') {
      alert('Please enter your name');
      return;
    }
    if (this.email === '') {
      alert('Please enter your email');
      return;
    }
    if (this.password === '') {
      alert('Please enter your password');
      return;
    }

    const userInfo = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.userService.registerUser(userInfo);
    alert('Registration successful');
    sessionStorage.setItem('registeredUserName', this.name);
    console.log(userInfo);

    location.assign('/login')
  }
  
}

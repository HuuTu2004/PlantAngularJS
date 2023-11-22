import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/sevices/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false; 
  userName: string | null = sessionStorage.getItem('userEmail')
  constructor(private router: Router) {}

  ngOnInit() {
   
    const loginStatus = sessionStorage.getItem('login');
    this.isLoggedIn = loginStatus === 'true';
  }
  logout() {
    sessionStorage.clear(); 
    location.assign('/login',)
  }
}

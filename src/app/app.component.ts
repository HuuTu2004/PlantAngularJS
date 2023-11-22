import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      // Người dùng đã đăng nhập, thực hiện các thao tác cần thiết (ví dụ: chuyển hướng đến trang chính)
      this.router.navigate(['/']);
    }
  }
}

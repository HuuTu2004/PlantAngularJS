import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any[] = [];

  constructor() {
    const storedData = localStorage.getItem('data');
    this.userData = storedData ? JSON.parse(storedData) : [];
  }

  registerUser(userInfo: any) {
    this.userData.push(userInfo);
    localStorage.setItem('data', JSON.stringify(this.userData));
  }

  getUsers(): any[] {
    return this.userData;
  }

  authenticateUser(email: string, password: string): boolean {
    const user = this.userData.find(u => u.email === email && u.password === password);
    return !!user; 
  }
  getUserByEmail(email: string): any | undefined {
    return this.userData.find(u => u.email === email);
  }
}
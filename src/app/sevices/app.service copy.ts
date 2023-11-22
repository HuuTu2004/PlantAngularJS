import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 private url = "assets/db.json"

  private apiUrl = "http://localhost:3000";
  

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  } 
  getProductById(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/${id}`);
  }

  registerUser(newUser: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, newUser);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  getProductData() {
    return this.http.get(this.url); 
  }

  get
}

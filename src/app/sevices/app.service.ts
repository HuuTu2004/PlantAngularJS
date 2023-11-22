import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 private url = "assets/db.json"

  
  

  constructor(private http: HttpClient) { }

  
  getProductById(id: number, data: any[]): any {
    return data.find((item: any) => {
      return item.id === id;
    });
  }

  searchByName(name:any, data: any): Observable<any[]> {
    return data.filter((item: any) => {
      return item.name.tolowerCase().includes(name.tolowerCase())
    });
  }

  getProduct() {
    return this.http.get(this.url); 
  }

  checkLogin(email: string, password: any, data: any) {
    let check =  data.find((item: any) => {
      return item.email == email && item.password == password;
    });

    if (check) {
      localStorage.setItem('login', JSON.stringify(check));
      return true;
    }

    return false;
  }

  getCart () {
    let cartJson = sessionStorage.getItem('cart');
    let carts:any = [];
    if (cartJson) {
      carts = JSON.parse(cartJson);
    }

    return carts;
  }

  addCart(product: any) {
    let idx: number = this.checkCartExists(product.id);
    let carts = this.getCart();
    if (idx === -1) {
      let item: any = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
      carts.push(product);
    } else {
      carts[idx].quantity += 1;
    }

    let cartJson: any = JSON.stringify(carts);

    sessionStorage.setItem('cart', cartJson)
  } 


  checkCartExists(id: number) {
    let carts = this.getCart();
    return carts.findIndex((item: any) => {
      return item.id == id
    })
  }
  clearCartById(productId: number) {
    let carts = this.getCart();
    const index = carts.findIndex((item: any) => item.id === productId);
    
    if (index !== -1) {
      carts.splice(index, 1);
      const cartJson = JSON.stringify(carts);
      sessionStorage.setItem('cart', cartJson);
    }
  }
}

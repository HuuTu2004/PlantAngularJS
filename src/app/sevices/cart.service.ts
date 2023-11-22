import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  addToCart(product: any) {
    this.items.push(product);
    this.updateLocalStorage();
  }

  getItems() {
    return this.items;
  }

  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
}

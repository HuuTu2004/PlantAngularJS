import { Component } from '@angular/core';
import { AppService } from 'src/app/sevices/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.cartItems = this.appService.getCart();
  }
  
  removeFromCartById(productId: number) {
    this.appService.clearCartById(productId);
    this.cartItems = this.appService.getCart();
  }
  pay( ):void{
    alert('Successful payment'),
    location.assign('/')
  }
}

import { Component,OnInit } from '@angular/core';
import { AppService } from 'src/app/sevices/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any[] = [];
  constructor(private appService:AppService) { }

  ngOnInit(): void {
   
    
    this.appService.getProduct().subscribe((data: any) => {
      this.products = data.products;
      
    });
  }

  
  addToCart(product: any) {
    this.appService.addCart(product);
   
  }
}

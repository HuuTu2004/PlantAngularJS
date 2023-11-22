import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/sevices/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[] = [];

  constructor(private appService:AppService , private router:Router) { }

  ngOnInit(): void {
   
    this.appService.getProduct().subscribe((data: any) => {
      this.products = data.products;

    });
    
  }

  addToCart(product: any) {
    this.appService.addCart(product);
   
  }
 
  userName: string | null = sessionStorage.getItem('userName');

 
  
}

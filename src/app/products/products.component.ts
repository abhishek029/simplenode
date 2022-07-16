import { CartService } from './../service/cart.service';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products : any;
  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.products=res;


      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addToCart(product: any){
    this.cart.addToCart(product);
  }

}

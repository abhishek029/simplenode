import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product : any = [];
  public billAmount : any = 0;
  constructor(public cart : CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.product=res;

      this.billAmount = this.cart.getTotalPrice();
    })
  }

  removeItem(item:any){
    this.cart.removeCartProduct(item);
  }

  removeAll(){
    this.cart.removeCart();
  }

}

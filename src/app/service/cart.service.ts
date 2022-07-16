import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems : any[] = []
  public productList = new BehaviorSubject<any>([]);//this can act as obervable and can emit data

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(product:any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
    console.log(this.cartItems);
  }

  getTotalPrice(){
    let finalTotal = 0;
    this.cartItems.map((a:any)=>{
      finalTotal += a.total;
    })
    return finalTotal;
  }

  removeCartProduct(product:any){
    this.cartItems.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItems.splice(index,1);
      }
    })

    this.productList.next(this.cartItems);
  }

  removeCart(){
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
}

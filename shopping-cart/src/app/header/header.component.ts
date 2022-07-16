import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public total : number = 0;
  constructor(private cart : CartService) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.total = res.length;
    })
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }


  addToCart(product: Product){
    let cartid = localStorage.getItem('cartId');

    if(!cartid){
      this.cartService.create().then(result=>{
        localStorage.setItem('cartId', result.key);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems = [];

cartTotal = 0;

  constructor(
    private ms: MessengerService,
    private cs: CartService) { }

  ngOnInit() {
    this.sendToCartMsg();
    this.reloadCartItems();
  }

  sendToCartMsg() {
    this.ms.getMsg().subscribe((product: Product) => {
      this.reloadCartItems();
    });
  }

  reloadCartItems(){
    this.cs.getcartItems().subscribe((items:CartItem[])=>{
      this.cartItems = items;
      this.calcCarttotal();
    })
  }

  calcCarttotal(){
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
    this.cartTotal += (item.qty * item.price)
  });
  }
}
  // deleteCartItem(cartItem:any){ 
    
  // }

 
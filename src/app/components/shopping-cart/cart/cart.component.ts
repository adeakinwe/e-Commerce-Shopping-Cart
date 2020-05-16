import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems = [
  // {id:1, productId: 2, productName: 'Product 2',qty: 2, price:50},
  // {id:2,productId: 3, productName: 'Product 3', qty: 3, price:100},
  // {id:3,productId: 1, productName: 'Product 1', qty: 2, price:150},
];

cartTotal = 0;

  constructor(private ms: MessengerService) { }

  ngOnInit() {
    this.ms.getMsg().subscribe((product:Product) => {
    this.sendToCart(product);  
    });

  }

  sendToCart(product: Product){
    let productExists = false;
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if(!productExists){
      this.cartItems.push({
        productImage:product.imageUrl,
        productId: product.id,
        productName: product.title,
        qty:1,
        price: product.price
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach((cartItem) => {
      return this.cartTotal += (cartItem.qty * cartItem.price)});
  }

  deleteCartItem(cartItem:any){ 
    
  }
}
 
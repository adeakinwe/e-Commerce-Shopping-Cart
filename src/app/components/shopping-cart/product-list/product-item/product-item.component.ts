import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import {MessengerService } from '../../../../services/messenger.service';
import { CartService } from '../../../../services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() productItem: Product;
@Input() addedToWishlist: boolean ;

  constructor(
    private ms: MessengerService,
    private cs: CartService,
    private ws: WishlistService
    ) { }

  ngOnInit() {
  }

  addToCart(){
    this.cs.addProductTocart(this.productItem).subscribe(()=>{
      this.ms.sendMsg(this.productItem)
    })
  }

  addProductToWishlist(){
    return this.ws.addToWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = true;
    })
  }

  removeProductFromWishlist(){
    return this.ws.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = false;
    })
  }
}

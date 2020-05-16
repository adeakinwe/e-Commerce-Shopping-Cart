import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() cartItem: any;
@Output() deleteCartItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 onDelete(cartItem:any){
   this.deleteCartItem.emit(cartItem)
 }
}

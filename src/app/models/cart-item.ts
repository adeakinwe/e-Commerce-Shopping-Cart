import { Product } from './product';

export class CartItem {
    id: number;
    productId: number;
    productName: string;
    qty: number;
    price: number;
    imageUrl: string;

    constructor(id: number, product:Product, qty = 1){
        this.id = id;
        this.productId = product.id;
        this.productName = product.title;
        this.qty = qty;
        this.price = product.price;
        this.imageUrl = product.imageUrl;
    }
}

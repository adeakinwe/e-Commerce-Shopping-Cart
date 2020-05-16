import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[] = [
  new Product(1, 'hang-out bicycle', 'Description 1', 150, '../assets/bicycle.jpg'),
  new Product(2, 'Vans Sneekers', 'Description 2', 250, '../assets/shoe (1).jpg'),
  new Product(3, 'fancy top', 'Description 3', 100, '../assets/shoe (5).jpg'),
  new Product(4, 'Nike Sneekers', 'Description 1', 150, '../assets/shoe (6).jpg'),
  new Product(5, 'fancy polo', 'Description 2', 250, '../assets/shoe (4).jpg'),
  new Product(6, 'Breathable Sneekers', 'Description 3', 100, '../assets/shoe (7).jpg'),
  new Product(7, 'Beach top', 'Description 1', 150, '../assets/shoe (3).jpg'),
  new Product(8, 'Shop bag', 'Description 2', 250, '../assets/shoe (2).jpg'),
  new Product(9, 'Baby Doll', 'Description 3', 100, '../assets/item.png'),
]

  constructor() { }

  getProducts(): Product[]{
    return this.products
  }
}

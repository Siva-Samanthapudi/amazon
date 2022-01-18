import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] = [];
  constructor() { 
    let p1 = new Product(0,'Television','Sony','https://tinyurl.com/ysp85kv7', 49900);    
    let p2 = new Product(1,'Smart Phone','Android Mobile','https://tinyurl.com/bdkfu45s', 24000);
    let p3 = new Product(2,'Mobile','Samsung','https://tinyurl.com/ysp85kv7', 49900);    
    let p4 = new Product(3,'Scooty','Bajaj','https://tinyurl.com/bdkfu45s', 24000);
      this.products.push(p1);
      this.products.push(p2);
      this.products.push(p3);
      this.products.push(p4);
    }

  getProducts(): Product[]{
    return this.products;
  }

  getProduct(id:number): Product{
    return this.products[id];
  }


  }



  //[
 // {name:'Television', description:'Smart Tv', imageUrl:'', price:12000},
// ]

import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] =[
    new Product(1,"product 1","This is the product 1 desc",100,"https://images-na.ssl-images-amazon.com/images/I/51psJ6v1aFL._SX425_.jpg"),
    new Product(2,"product 2","This is the product 2 desc",150,"https://i.ytimg.com/vi/40awGIgvnQ0/maxresdefault.jpg"),
    new Product(3,"product 3","This is the product 3 desc",50,"https://i.insider.com/5ac512497a74af1d008b46ad?width=1000&format=jpeg&auto=webp"),
    new Product(4,"product 4","This is the product 4 desc",200,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefBhqg-Gcd_fhCdTW3lqFzisiaN6wGDU4Yw&usqp=CAU"),
    new Product(5,"product 5","This is the product 5 desc",100,"https://images-na.ssl-images-amazon.com/images/I/51nbqUW7ClL.jpg"),
    new Product(6,"product 6","This is the product 6 desc",150,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLANzZoPjtTVtivwnPMpVUmFNbgsFHyoeNpw&usqp=CAU"),
  ]
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}

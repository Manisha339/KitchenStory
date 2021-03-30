import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems= [
    { id:1, ProductId:1, productname: "Test 1", qty: 1, price: 100},
  ];
  cartTotal=0;
  
  constructor(private msg: MessengerService) { }

  ngOnInit() {
      this.msg.getMsg().subscribe((product: any) =>{
        console.log(product);
      })
      this.cartItems.forEach(item => {
        const qty=0;
        this.cartTotal +=(item.qty * item.price)
      });  
    }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: MenuItem[] = [];
  orderMethod: string = '';
  //contact/payment/address info; autofill if user signed in

  constructor() { } //inject menu-item service

  ngOnInit(): void {
  }

  getCartItems() {
    //get items in cart array from service
  }

  placeOrder() {
    //add order to user's order history
    //logOrder(cartItems, orderMethod, ...);
  }


}

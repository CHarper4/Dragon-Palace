import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { RestaurantService } from '../restaurant.service';
import { UserOrders } from '../user/user-orders';
import { User } from '../user/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: MenuItem[] = [];
  orderMethod: string = '';
  //contact/payment/address info; autofill if user signed in

  constructor(
    private restaurantService: RestaurantService) { }

  userOrders: UserOrders[];

  @Input() userOrder: UserOrders = {
    user: "",
    pastOrders: []
  }




  ngOnInit(): void {
  }

  getCartOrders(): void{

  }

  getCartItems() {
    //get items in cart array from service
  }

  placeOrder() {
    //add order to user's order history
    //logOrder(cartItems, orderMethod, ...);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { RestaurantService } from '../restaurant.service';
import { Login } from '../login/login';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: MenuItem[] = [];
  cartLength: number = 0;
  method: string = "pickup";
  subTotal: number = 0;
  deliverFee: number = 0;
  tax: number = 0;
  driverTip: number = 0;
  total: number = 0;

  displayStyle = "none";

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartOrders(): void{

  }

  getCartItems() {
    this.cartLength = this.restaurantService.cartItemIDs.length;

    for(let i = 0; i < this.cartLength; i++) {
      const itemID = this.restaurantService.cartItemIDs[i];
      this.restaurantService.getMenuItem(itemID).subscribe(cartItem => {
        this.cartItems.push(cartItem); 
        //set amounts
        this.subTotal += Number(cartItem.price.replace("\$", ''));  //parse amount from price string
        this.tax = this.subTotal * 0.05;
        this.calcTotal();
      });
    }
  }

  calcTotal(): void {
    this.total = this.subTotal + this.deliverFee + this.tax;
    if(this.method == "delivery") {
      this.total += this.driverTip;
    }
    else {
      this.driverTip = 0;
    }
  }

  //update delivery fee and driver tip when method is selected/changed
  methodUpdate(): void {
    if(this.method == "delivery") {
      this.deliverFee = this.subTotal * 0.2;
    }
    else {
      this.deliverFee = 0;
      this.driverTip = 0;
    }
    this.calcTotal();
  }

  placeOrder() {
    //add order to user's order history
    let itemIDs: number[] = [];
    for(let item of this.cartItems) {
      itemIDs.push(item.id);
    }
    this.restaurantService.getLogin(this.restaurantService.activeUserID).subscribe(user => {
      user.pastOrders.push(itemIDs);
      this.restaurantService.updateOrders(user).subscribe();
    });

    //reset cart
    this.restaurantService.cartItemIDs = [];
    this.cartItems = [];
  }

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}

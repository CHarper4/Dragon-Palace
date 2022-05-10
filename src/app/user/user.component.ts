import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { RestaurantService } from '../restaurant.service';
import { MenuItem } from '../menu-item/menu-item';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  tempUser: Login;
  userOrders: MenuItem[][] = [];
  displayStyle = "none";


  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.refreshUser();
  }

  refreshUser() {
    //access user's pastOrders array and use the item IDs to add the corresponding menu items to userOrders
    this.restaurantService.getLogin(this.restaurantService.activeUserID).subscribe(user => {
       for(let order of user.pastOrders) {
         let singleOrder: MenuItem[] = [];
         for(let itemID of order) {
           this.restaurantService.getMenuItem(itemID).subscribe(item => singleOrder.push(item));
         }
         this.userOrders.push(singleOrder)
       }
    });
  }  

  addToCart(prevOrder: MenuItem[]) {
    for (let item of prevOrder) {
      this.restaurantService.cartItemIDs.push(item.id);
    }
  }

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

}
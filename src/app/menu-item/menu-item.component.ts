import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItems: MenuItem[];
  displayStyle = "none";


 @Input() menuItem: MenuItem = {
     id: 0,
     title: '',
     price: '',
     description: '',
     imageURL: ''
  };
  
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  addToCart(itemAmount: string) {
    for(let i = 0; i < parseInt(itemAmount); i++) {
      this.restaurantService.cartItemIDs.push(this.menuItem.id);
    }
  }

  getMenuItems(): void {
    this.restaurantService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

}

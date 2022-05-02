import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  itemAmount?: number;

  menuItems: MenuItem[];

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

  addToCart() {
    //add current item to cart array
    //take into account amount selected
  }

  getMenuItems(): void {
    this.restaurantService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }



}

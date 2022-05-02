import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private restaurantService: RestaurantService) { }

  getMenuItems(){
    this.restaurantService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }

  ngOnInit(): void {
    this.getMenuItems();
  }
}

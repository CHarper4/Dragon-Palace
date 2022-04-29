import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }
  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(){
    this.restaurantService.getMenuItems();
  }
}

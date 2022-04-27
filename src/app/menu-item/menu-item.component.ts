import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  itemAmount?: number;

  @Input() menuItem: MenuItem = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      imageURL: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    //add current item to cart array
    //take into account amount selected
  }



}

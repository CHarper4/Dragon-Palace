import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { MenuItem } from './menu-item/menu-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menuItems = [
      {
        id:1, title:"Dumplings", price: "$8", description:"Some dumplings", imageURL:"assets/img/dumplings.jpg"
      },
      {
        id:2, title:"Egg Rolls", price: "$8", description:"Some eggs rolls", imageURL:"assets/img/eggrolls.jpg"
      },
      {
        id:3, title:"Spring Rolls", price: "$8", description:"Some spring rolls", imageURL:"assets/img/springrolls.jpg"
      },
      {
        id:4, title:"General Tso's Chicken", price: "$15", description:"Some general tso's chicken", imageURL:"assets/img/generaltsos.jpg"
      },
      {
        id:5, title:"Orange Chicken", price: "$15", description:"Some orange chicken", imageURL:"assets/img/orangechicken.jpg"
      },
      {
        id:6, title:"Egg Drop Soup", price: "$12", description:"Some egg drop soup", imageURL:"assets/img/eggdropsoup.jpg"
      },
    ];

    const userLogins = [
      {
        id:1, username:"testUsername", password:"testPassword", pastOrders: [ [1, 4, 6], [3, 4] ]
      },
      {
        id:2, username:"otherTestUsername", password:"testPassword-2", pastOrders: [ [3, 1], [4] ]
      },
    ];

    return {menuItems, userLogins};
    
  }
}

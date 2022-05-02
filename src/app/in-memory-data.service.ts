import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menuItems = [
      {
        id:1, title:"Dumplings", price: "$8", description:"Some dumplings", imageURL:"assets/img/dragonLogo.jpg"
      },
      {
        id:2, title:"Egg Rolls", price: "$8", description:"Some eggs rolls", imageURL:"assets/img/dragonLogo.jpg"
      },
      {
        id:3, title:"Spring Rolls", price: "$8", description:"Some spring rolls", imageURL:"assets/img/dragonLogo.jpg"
      },
      {
        id:4, title:"General Tso's Chicken", price: "$15", description:"Some general tso's chicken", imageURL:"assets/img/dragonLogo.jpg"
      },
      {
        id:5, title:"Orange Chicken", price: "$15", description:"Some orange chicken", imageURL:"assets/img/dragonLogo.jpg"
      },
      {
        id:6, title:"Egg Drop Soup", price: "$12", description:"Some egg drop soup", imageURL:"assets/img/dragonLogo.jpg"
      },
    ];

    const userOrders = [
      {
        username:"testUsername", pastOrders: menuItems[2]
      }
    ]

    const userLogins = [
      {
        id:1, username:"testUsername", password:"testPassword"
      },
      {
        id:2, username:"otherTestUsername", password:"testPassword-2"
      },
    ];
    return {menuItems};
    return {userOrders};
    return {userLogins};
  }
}

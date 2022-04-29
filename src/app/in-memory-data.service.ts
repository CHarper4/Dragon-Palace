import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menuItems = [
      {
        id:1, title:"Dumplings", price: 12, description:"sjsdc", imageURL:"assets/img/dragonLogo.jpg"
      }
    ];
    return {menuItems}
  }
  constructor() { }
}

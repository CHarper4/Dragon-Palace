import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dragon-Palace';
}

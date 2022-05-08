import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogins: User[] = [];

  constructor(private restaurantService: RestaurantService) { }

   registerUser(username: string, password: string){
     username = username.trim();
     password = password.trim();
     //if username/password not found, return for now, will add message showing not found later
     if(!username) { return; }
     if(!password) { return; }
     this.restaurantService.registerUser({username, password} as User).subscribe(user => { this.userLogins.push(user)})
     }

  ngOnInit(): void {
  }

}

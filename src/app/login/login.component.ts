import { Component, Input, OnInit } from '@angular/core';
import { LoginInfo, Logins } from './login-info';
import { Login } from './login';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  activeUser=-1
  username=''
  newUser=''
  newPass=''
  num=0
  displayStyle = "none";

  @Input() loginInfo: LoginInfo={
    num:0,
    username:'',
    password:''
  }

  users: Login[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getLogins();
  }

  getLogins() {
    this.restaurantService.getLogins().subscribe(users => this.users = users);
  }

  compair(){
    let username=this.newUser
    let password= this.newPass
    for(var i=0; i < Logins.length; i++){
      this.loginInfo=Logins[i]
      if(username==this.loginInfo.username){
        if(password==this.loginInfo.password){
          this.activeUser=this.loginInfo.num
          console.log(this.loginInfo)
          break
        }
      }
      else{this.activeUser=-1}
    }

    //check user array for matching username and password
    //if matching, switch activeUserID to that user's id
    for(let user of this.users) {
      if ((user.username.toLowerCase() == this.newUser.toLowerCase()) && (user.password == this.newPass)) {
        this.restaurantService.activeUserID = user.id;
        console.log('user ' + user.username + ' logged in'); //message here?
        break;
      }
    }
    
  }
  userChange(event:any){
    this.newUser=event.target.value
  }
  passChange(event:any){
    this.newPass=event.target.value
  }

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}

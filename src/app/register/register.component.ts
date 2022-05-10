import { Component, Input, OnInit } from '@angular/core';
import { LoginInfo, Logins } from '../login/login-info';
import { Login } from '../login/login';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() loginInfo: LoginInfo={
    num:0,
    username:'',
    password:''
  }
  
  activeUser=-1
  username=''
  newUser=''
  newPass=''
  name:number
  signedIn:boolean

  users: Login[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getLogins();
  }

  getLogins() {
    this.restaurantService.getLogins().subscribe(users => this.users = users);
  }

  newCompair(){
    this.signedIn=false
    let username=this.newUser
    let password= this.newPass
    let length = Logins.length
    for(var i=0; i < length; i++){
      this.loginInfo=Logins[i]
      if(username==this.loginInfo.username){
          this.signedIn=false
          console.log(this.loginInfo)
          //error username taken
          break
      }
      else if(i==length-1){
        Logins.push({num:this.loginInfo.num+1, username:this.newUser, password:this.newPass}) 
        this.signedIn = true
        this.activeUser = this.loginInfo.num+1
        //this.loginInfo=Logins[Logins.length-1]
        //console.log(this.loginInfo); //for testing

        //create new user, add to user array, and set as logged in user
        let newID = this.users[this.users.length-1].id + 1;
        let newLogin = { id: newID, username: this.newUser, password: this.newPass, pastOrders: [] }
        this.restaurantService.addUser(newLogin).subscribe(_ => {
          this.getLogins(),
          this.restaurantService.activeUserID = newID;
        });
      }
    }

  }
  userChange(event:any){
    this.newUser=event.target.value
  }
  passChange(event:any){
    this.newPass=event.target.value
  }
}
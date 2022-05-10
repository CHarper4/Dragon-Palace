import { Component, Input, OnInit } from '@angular/core';
import { LoginInfo, Logins } from './login-info';


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
  @Input() loginInfo: LoginInfo={
    num:0,
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit() {
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
  }
  userChange(event:any){
    this.newUser=event.target.value
  }
  passChange(event:any){
    this.newPass=event.target.value
  }
}

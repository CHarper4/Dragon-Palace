import { Component, Input, OnInit } from '@angular/core';
import { LoginInfo, Logins } from '../login/login-info';
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
  constructor() { }
  activeUser=-1
  username=''
  newUser=''
  newPass=''
  name:number
  signedIn:boolean
  ngOnInit() {
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
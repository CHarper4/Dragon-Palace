export interface LoginInfo {
    num:number
    username:string
    password:string
}

export const Logins: LoginInfo[]=[
  {num:1, username:'Bob', password:'words'},//for some reason the num here is unreadable when singled out
  {num:2, username:'Phil', password:'yep'}//but not here, it works here
]
  
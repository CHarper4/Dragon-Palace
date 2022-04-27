import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
//import {RegisterComponent}
//import {LoginComponent}
import {CartComponent} from './cart/cart.component'
import {UserComponent} from './user/user.component'

// import component and add path below

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'cart', component: CartComponent},
  {path: 'user', component: UserComponent},
  { path: '', redirectTo: '/home', pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from "rxjs";
import { MenuItem } from './menu-item/menu-item';
import { UserOrders } from "./user/user-orders";
import { MessageService } from "./message.service";

@Injectable({
    providedIn: 'root',
})

export class RestaurantService {

    private urlMenuItems = 'api/menuItems';
    private urlUserLogins = 'api/userLogins';

    cartItemIDs: number[] = [];
    activeUserID = 1;

    constructor(private http: HttpClient, private messageService: MessageService
        ) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

    //these methods assume tap is writing to console, not a separate message service (for now)

    //-------------------MESSAGES-------------------------------------------------------------------
    private log(message: string) {
        this.messageService.add(`RestaurantService: ${message}`);
    }

    //-------------------MENU-ITEM SERVICES----------------------------------------------------------
    getMenuItems(): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(this.urlMenuItems)
        .pipe(
            tap(_ => console.log('fetched menu items')),
            catchError(this.handleError<MenuItem[]>('getMenuItems', []))
        )
    }

    getMenuItem(id: number): Observable<MenuItem> {
        const urlMenuItem = `${this.urlMenuItems}/${id}`;
        return this.http.get<MenuItem>(urlMenuItem)
        .pipe(
            tap(_ => console.log('fetched menu item')),
            catchError(this.handleError<MenuItem>('getMenuItem'))
        )
    }

    //-----------LOGIN SERVICES-------------------------------------------------------------------
    getLogin(id: number): Observable<Login> {
      const urlUserLogin = `${this.urlUserLogins}/${id}`;
      return this.http.get<Login>(urlUserLogin)
      .pipe(
          tap(_ => console.log('fetched user')),
          catchError(this.handleError<Login>('getLogin'))
      )
    }

    //-----------USER SERVICES-----------------------------------------------------------------------
    

    //-----------USER SERVICES-----------------------------------------------------------------------

    //--------------REGISTER SERVICES----------------------------------------------------------------

    //----------CART SERVICES------------------------------------------------------------------------


}
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from "rxjs";
import { MenuItem } from './menu-item';

@Injectable({
    providedIn: 'root',
})

export class RestaurantService {
    //assuming db in 'in-memory-data service is named menuItems'
    private urlMenuItems = 'api/menuItems'

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

    //these methods assume tap is writing to console, not a separate message service


    //-------------------MENU-ITEM SERVICES---------------------------------------------
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
    //----------------END MENU-ITEM SERVICES----------------------------------------------

    //-----------LOGIN SERVICES---------

    //-----------END LOGIN SERVICES------

    //-----------USER SERVICES-----------

    //------------END USER SERVICES--------

    //--------------REGISTER SERVICES-----------

    //---------END REGISTER SERVICES---------------

    //----------CART SERVICES------------

    //---------END CART SERVICES----------
}
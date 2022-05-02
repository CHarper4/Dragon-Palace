import { Login } from "../login/login"
import { MenuItem } from "../menu-item/menu-item"

export interface UserOrders {
    user: Login["username"],
    pastOrders: MenuItem[]
}
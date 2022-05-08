import { User } from "./user"
import { MenuItem } from "../menu-item/menu-item"

export interface UserOrders {
    user: User["username"],
    pastOrders: MenuItem[]
}
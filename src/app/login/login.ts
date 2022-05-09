import { MenuItem } from '../menu-item/menu-item'

export interface Login {
    id: number,
    username: string,
    password: string,
    pastOrders: number[][]
}
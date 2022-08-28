import { Injectable } from '@angular/core';
import CartItem from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carttedItems: CartItem[] = [];
  constructor() {}

  addToCart(item: CartItem): void {
    this.carttedItems.map(i =>{
      if(i.id === item.id) {
        let index = this.carttedItems.indexOf(i);
        item.quantity = i.quantity + item.quantity
        this.carttedItems.splice(index, 1);
      }
    })
    this.carttedItems.push(item);
  }
  changeQuantity(id:string, quantity:number):void {
    this.carttedItems.map(i => {
      return (i.id === id )? i.quantity = quantity : i })
  }
  removeFromCart(id:string): CartItem[] {
    this.carttedItems = this.carttedItems.filter(i => i.id !== id);
    return this.carttedItems;
  }
  
  getTotalCost(items: CartItem[]):number{
    let total = items.map(i => i.quantity*i.price);
    let cost = total.reduce((total,num) => {
      return total + num;
    },0)
    return cost;
  }
}

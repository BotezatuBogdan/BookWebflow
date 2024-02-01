import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDbService {

  private cartKey = 'shoppingCart';
  private cartItemsSubject = new BehaviorSubject<any[]>(this.getCartItems());

  constructor() { }

  private getCartItems(): any[] {
    const cartItems = localStorage.getItem(this.cartKey);
    return cartItems ? JSON.parse(cartItems) : [];
  }

  private setCartItems(items: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
    this.cartItemsSubject.next(items); // Notify observers
  }

  getCartItemsObservable(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  getCart(): any[] {
    return this.getCartItems();
  }

  addToCart(item: { bookNr: any; price: any; quantity: any; title: any; }): void {
    const cartItems = this.getCartItems();

    // Check if the item already exists in the cart based on bookNr
    const existingIndex = cartItems.findIndex((cartItem) => cartItem.bookNr === item.bookNr);

    if (existingIndex !== -1) {
      // Item already exists in the cart, update its quantity or any other property
      cartItems[existingIndex].quantity = parseInt(item.quantity) + parseInt(cartItems[existingIndex].quantity);
    } else {
      // Item is not in the cart, add it
      const newItem = { bookNr: item.bookNr, price: item.price, quantity: item.quantity, title: item.title };
      cartItems.push(newItem);
    }

    this.setCartItems(cartItems);
  }

  updateCartItemFromPayment(updatedItem: any): void {

    const cartItems = this.getCartItems();
    const index = cartItems.findIndex((item) => item.bookNr === updatedItem.img);

    if (index !== -1) {
      cartItems[index].quantity = updatedItem.quantity;
      this.setCartItems(cartItems);
    }
  }

  updateCartItemFromCart(updatedItem: any) {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex((item) => item.bookNr === updatedItem.bookNr);

    if (index !== -1) {
      cartItems[index].quantity = updatedItem.quantity;
      this.setCartItems(cartItems);
    }
  }

  removeCartItem(bookNr: string): void {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex((item) => item.bookNr === bookNr);

    if (index !== -1) {
      cartItems.splice(index, 1);
      this.setCartItems(cartItems);
    }
  }

  removeAllItemsFromCart(): void {
    // Set the cart items to an empty array
    this.setCartItems([]);
  }

  getTotal(): number {
    const cartItems = this.getCartItems();
    
    // Calculate the total based on the quantity and price of each item
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.quantity * item.price);
    }, 0);

    return total;
  }

}

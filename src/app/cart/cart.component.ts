import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import { CartDbService } from '../services/cart-db.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: any[] = [];
  newItem: any;
  sum: number = 0;

  constructor(public cartService: CartServiceService, private cartDB: CartDbService, private router: Router) { }

  ngOnInit(): void {
    this.loadCartItems();
    this.updateSum();
    console.log
  }

  private loadCartItems() {
    this.cartItems = this.cartDB.getCart();
    // Optionally, you can perform additional actions after loading cart items
  }

  onRemove(index: number) {
    const itemToRemove = this.cartItems.find(item => item.bookNr === index);
  
    if (itemToRemove) {
      this.cartDB.removeCartItem(itemToRemove.bookNr);
      this.loadCartItems();
      this.updateSum();
    }
  }
  
  private updateSum() {
    this.sum = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  onQuantityChange(index: number) {
    const itemToUpdate = this.cartItems.find(item => item.bookNr === index);
  
    if (itemToUpdate) {
      itemToUpdate.quantity = +itemToUpdate.quantity;
  
      if (itemToUpdate.quantity < 1) {
        this.onRemove(index);
      }
    }
  
    this.updateSum();
  }

  goToPayment() {
    if (this.cartItems && this.cartItems.length) {
      this.router.navigate(['payment']);
    }

  }

}

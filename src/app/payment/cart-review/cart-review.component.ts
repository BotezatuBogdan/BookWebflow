import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartDbService } from 'src/app/services/cart-db.service';

@Component({
  selector: 'app-cart-review',
  templateUrl: './cart-review.component.html',
  styleUrls: ['./cart-review.component.css']
})
export class CartReviewComponent implements OnInit, OnDestroy {

  cartItems: any[] = [];
  sum: number = 0;
  selectedTabIndex: number = 0;
  maxNumberOfTabs: number = 2;
  displayedColumns: string[] = ['Image', 'Title', 'Quantity', 'Price'];
  tableItems: { position: number, title: string, quantity: string, price: number, img: number }[] = [];
  
  private cartSubscription!: Subscription;

  constructor(private cartDB: CartDbService) { }

  ngOnInit(): void {
    this.cartItems = this.cartDB.getCart();

    this.cartSubscription = this.cartDB.getCartItemsObservable().subscribe((updatedCartItems) => {
      this.cartItems = updatedCartItems;
      this.updateTableItems();
    });
  }

  private updateTableItems(): void {
    this.sum = 0;
    this.tableItems = [];

    this.cartItems.forEach((element, index) => {
      let obj = {
        position: (index + 1),
        title: element.title,
        quantity: element.quantity,
        price: element.price,
        img: element.bookNr
      }

      if (obj.price > 1) {
        obj.price = obj.quantity * obj.price;
      }

      this.sum += obj.price;
      this.tableItems.push(obj);
    });
  }

  ngOnDestroy(): void {
    
    this.cartSubscription.unsubscribe();
  }

  private updateSum() {
    this.sum = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  onQuantityChange(position: any, quantity: any) {
    let itemToUpdate = this.tableItems.find(item => item.position === position);

    if (itemToUpdate) {
      if (parseInt(itemToUpdate.quantity) < 1) {
        this.cartDB.removeCartItem(itemToUpdate.img.toString());
      } else {
        itemToUpdate.quantity = quantity.toString();
      }

      this.cartDB.updateCartItemFromPayment(itemToUpdate);
    }

    this.updateTableItems();

    this.updateSum();
    }

}

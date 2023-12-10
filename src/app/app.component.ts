import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';
import { CartDbService } from './services/cart-db.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Book';
  collapsed: boolean | undefined;
  cartCount = 0;

  cartItems: any[] = [];

  private cartSubscription!: Subscription;

  constructor(public dialog: MatDialog, private router: Router, private cartDB: CartDbService) {}

  ngOnInit() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 1100 ) {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }

    this.cartItems = this.cartDB.getCart();

    this.cartSubscription = this.cartDB.getCartItemsObservable().subscribe((updatedCartItems) => {
      this.cartItems = updatedCartItems;

      this.cartCount = 0;

      this.cartItems.forEach(element => {
        this.cartCount++;
      });

    });

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    // console.log(screenWidth);
    if (screenWidth < 1100 ) {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }
  }

  onActive() {
    window.scroll(0,0);
  }

  onOrderClick() {
    this.router.navigate(['store']);
  }

  logoClick() {
    this.router.navigate(['home']);
  }


  openDialog() {
    const dialogRef = this.dialog.open(CartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}




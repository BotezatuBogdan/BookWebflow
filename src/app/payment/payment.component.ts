import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { CartDbService } from '../services/cart-db.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartItems: any[] = [];
  sum: number = 0;
  selectedTabIndex: number = 0;
  maxNumberOfTabs: number = 2;
  displayedColumns: string[] = ['Image', 'Title', 'Quantity', 'Price'];
  tableItems: { position: number, title: string, quantity: string, price: number, img: number }[] = [];

  constructor(private cartDB: CartDbService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartDB.getCart();


    this.cartItems.forEach(item => {
      this.sum += (item.price * item.quantity);
    })

    
    this.cartItems.forEach( (element,index) => {
        let obj = {
          position: (index + 1),
          title: element.title,
          quantity: element.quantity,
          price: element.price,
          img: element.bookNr
        }

        if( obj.price > 1) {
          obj.price = obj.quantity * obj.price;
        }

        this.tableItems.push(obj);
    });

  }




  nextStep() {
    if (this.selectedTabIndex != this.maxNumberOfTabs) {
      this.selectedTabIndex = this.selectedTabIndex + 1;
    }
  }

  previousStep() {
    
    if (this.selectedTabIndex != 0) {
      this.selectedTabIndex = this.selectedTabIndex - 1;
    }
  }

}

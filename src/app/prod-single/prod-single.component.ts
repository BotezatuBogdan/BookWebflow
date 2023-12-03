import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { BookDbService } from '../services/book-db.service';
import { CartDbService } from '../services/cart-db.service';

@Component({
  selector: 'app-prod-single',
  templateUrl: './prod-single.component.html',
  styleUrls: ['./prod-single.component.css']
})
export class ProdSingleComponent implements OnInit {

  infoText: boolean = true;
  bookList: any[] = [];

  imgNumber: string = '';
  bookTitle: string = '';
  bookPrice: string = '';
  bookDescription: string = '';
  bookType: string = '';
  publisher: string = '';
  language: string = '';
  paperback: string = '';
  isbn: string = '';
  dimensions: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private bookDbService: BookDbService, private cartDB: CartDbService) { }

  ngOnInit(): void {

    this.bookDbService.getBooks().subscribe((books) => {
      this.bookList = books;

      this.route.queryParams.subscribe(params => {
        const articleId = +params['id'];
        if (articleId) {
          this.imgNumber = articleId.toString();
          this.bookTitle = this.bookList[articleId - 1].bookTitle;
          this.bookPrice = this.bookList[articleId - 1].bookPrice;
          this.bookDescription = this.bookList[articleId - 1].bookText;
          this.bookType = this.bookList[articleId - 1].bookType;
          this.publisher = this.bookList[articleId - 1].publisher;
          this.language = this.bookList[articleId - 1].language;
          this.paperback = this.bookList[articleId - 1].paperback;
          this.isbn = this.bookList[articleId - 1].isbn;
          this.dimensions = this.bookList[articleId - 1].dimensions;
        } else {
          this.router.navigate(['err'])
        }
  
      });
    });

    
  }

  showFirsttext() {
    this.infoText = true;
  }

  showSecondtext() {
    this.infoText = false;
  }

  cartItem = { bookNr: '1', price: '', quantity: '', title: '' };

  quantity = new FormControl('1', [Validators.min(1)]);

  addToCart() {

    if (this.quantity.valid) {
      this.cartItem.bookNr = this.imgNumber;
      this.cartItem.price = this.bookPrice;
      this.cartItem.quantity = this.quantity.value?.toString() ?? '0';
      this.cartItem.title = this.bookTitle;
      
      this.cartDB.addToCart(this.cartItem);

    }

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDbService } from '../services/book-db.service';
import { bookList } from '../data/book-data';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {


  constructor(private bookDbService: BookDbService, private router: Router) {}

  books = bookList;


  onClick(index: string) {
    this.router.navigate(['prodSingle'], { queryParams: { id: index } });
  }

  
}

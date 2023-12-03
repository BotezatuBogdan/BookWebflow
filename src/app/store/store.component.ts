import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDbService } from '../services/book-db.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  bookList: any[] = [];

  constructor(private bookDbService: BookDbService, private router: Router) {}

  ngOnInit(): void {
    this.bookDbService.getBooks().subscribe((books) => {
      this.bookList = books;
    });
  }

  onClick(index: string) {
    this.router.navigate(['prodSingle'], { queryParams: { id: index } });
  }

}

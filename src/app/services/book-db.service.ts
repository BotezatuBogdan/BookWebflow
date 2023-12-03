import { Injectable, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class BookDbService {

  private cartLink = 'http://localhost:3000/bookList';

  constructor(private http: HttpClient) { }

  // Retrieve all Books
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.cartLink);
  }

  // Retrieve a single Book by ID
  getBook(id: number): Observable<any> {
    const url = `${this.cartLink}/${id}`;
    return this.http.get<any>(url);
  }

  // Add a new Book
  addBook(Book: any): Observable<any> {
    return this.http.post<any>(this.cartLink, Book);
  }

  // Update an existing Book
  updateBook(Book: any): Observable<any> {
    const url = `${this.cartLink}/${Book.bookNr}`;
    return this.http.put<any>(url, Book);
  }

  // Delete an Book by ID
  deleteBook(id: number): Observable<any> {
    const url = `${this.cartLink}/${id}`;
    return this.http.delete<any>(url);
  }
}

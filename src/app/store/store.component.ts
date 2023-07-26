import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  bookList = [
    { bookImg: '1', bookTitle: 'Atomic One’s', bookText: 'As the book contains theoretical content as well as solved questions. ', bookPrice: '$ 13.84 USD', bookType: 'Printed Book' },
    { bookImg: '2', bookTitle: 'Atomic One’s - Audio', bookText: 'As the book contains theoretical content as well as solved questions. ', bookPrice: '$ 68.97 USD', bookType: 'Audio' },
    { bookImg: '3', bookTitle: 'Atomic One’s - CD', bookText: 'As the book contains theoretical content as well as solved questions. ', bookPrice: '$ 27.95 USD', bookType: 'Audio CD + Printed Book' },

    { bookImg: '4', bookTitle: 'The Dark Light', bookText: 'As the book contains theoretical content as well as solved questions. ', bookPrice: '$ 86.11 USD',bookType: 'Printed Book' },
    { bookImg: '5', bookTitle: 'The Dark Light - Audio', bookText: 'As the book contains theoretical content as well as solved questions. ', bookPrice: '$ 73.22 USD', bookType: 'Audio' },
    { bookImg: '6', bookTitle: 'The Dark Light - CD', bookText: 'As the book contains theoretical content as well as solved questions. ', bookPrice: '$ 83.55 USD', bookType: 'Audio CD + Printed Book' },
  ]

}

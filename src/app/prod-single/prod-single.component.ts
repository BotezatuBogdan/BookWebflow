import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-single',
  templateUrl: './prod-single.component.html',
  styleUrls: ['./prod-single.component.css']
})
export class ProdSingleComponent {

  infoText: boolean = true;

  showFirsttext() {
    this.infoText = true;
  }

  showSecondtext() {
    this.infoText = false;
  }


  bookList = [
    {
      bookImg: '1', bookTitle: 'Atomic One’s',
      bookText: 'As the book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.',
      bookPrice: '$ 13.84 USD',
      bookType: 'Printed Book',
      publisher: 'The Hilton Book',
      language: 'English',
      paperback: '256',
      isbn: '98547152365',
      dimensions: '20 x 14 x 4cm'
    },
    {
      bookImg: '2',
      bookTitle: 'Atomic One’s - Audio',
      bookText: 'The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.',
      bookPrice: '$ 68.97 USD',
      bookType: 'Audio',
      publisher: 'Discovery Book Palace',
      language: 'French',
      paperback: '180',
      isbn: '98547152365',
      dimensions: '20 x 14 x 4cm'
    },
    {
      bookImg: '3',
      bookTitle: 'Atomic One’s - CD',
      bookText: 'The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.',
      bookPrice: '$ 27.95 USD',
      bookType: 'Audio CD + Printed Book',
      publisher: 'Oxford Book Palace',
      language: 'French',
      paperback: '175',
      isbn: '84512654849',
      dimensions: '20 x 18cm'
    },

    {
      bookImg: '4',
      bookTitle: 'The Dark Light',
      bookText: 'The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.',
      bookPrice: '$ 86.11 USD',
      bookType: 'Printed Book',
      publisher: 'Blue Berry Book House',
      language: 'English',
      paperback: '245',
      isbn: '98547152367',
      dimensions: '20 x 14 x 4cm'
    },
    {
      bookImg: '5',
      bookTitle: 'The Dark Light - Audio',
      bookText: 'The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.',
      bookPrice: '$ 73.22 USD',
      bookType: 'Audio',
      publisher: 'Generic Book Publishers',
      language: 'English',
      paperback: '247',
      isbn: '98547125417',
      dimensions: '20 x 28 x 4cm'
    },
    {
      bookImg: '6',
      bookTitle: 'The Dark Light - CD',
      bookText: 'The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.',
      bookPrice: '$ 83.55 USD',
      bookType: 'Audio CD + Printed Book',
      publisher: 'The Hilton Book',
      language: 'English',
      paperback: '198',
      isbn: '98541152365',
      dimensions: '20 x 24 x 4cm'
    },
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

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

  ngOnInit() {
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
  }

}

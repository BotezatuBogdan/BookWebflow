import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  constructor(private router: Router) {}

  index: number | undefined;

  cardList = [
    { cardImg: '1', cardTitle: 'Significant reading has more info number', cardText: 'Override the digital divide with additional clickthroughs from DevOps for real-time schemas.', cardLink: 'asd', cardDate: 'October 6, 2021' },
    { cardImg: '2', cardTitle: 'Release of Letraset sheets tools containing  passages', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '3', cardTitle: 'The energy efficiency offers hydrotherapy or swim', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '4', cardTitle: 'The energy efficiency offers hydrotherapy or swim', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '5', cardTitle: 'Release of Letraset sheets tools containing  passages', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '6', cardTitle: 'The energy efficiency offers hydrotherapy or swim', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '7', cardTitle: 'The energy efficiency offers hydrotherapy or swim', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '8', cardTitle: 'Release of Letraset sheets tools containing  passages', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' },
    { cardImg: '9', cardTitle: 'The energy efficiency offers hydrotherapy or swim', cardText: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.', cardLink: 'asd', cardDate: 'Author - 23.05.2022' }
  ]

  onClick(index: string) {
    this.router.navigate(['articles/articleInfo'], { queryParams: { id: parseInt(index) } });
  }

}

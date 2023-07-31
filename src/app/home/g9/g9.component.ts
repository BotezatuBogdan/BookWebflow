import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g9',
  templateUrl: './g9.component.html',
  styleUrls: ['./g9.component.css']
})
export class G9Component {

  constructor( private router: Router) {}

  onClick(index: string, event: Event) {
    event.preventDefault();
    this.router.navigate(['/articles/articleInfo'], { queryParams: { id: parseInt(index) } });
  }
  

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g2',
  templateUrl: './g2.component.html',
  styleUrls: ['./g2.component.css']
})
export class G2Component {

  constructor(private router: Router) {}

  onClick(index: string) {
    this.router.navigate(['prodSingle'], { queryParams: { id: index } });
  }

}

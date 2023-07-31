import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g1',
  templateUrl: './g1.component.html',
  styleUrls: ['./g1.component.css']
})
export class G1Component {
  
  constructor(private router: Router) {}

  onClick(index: string) {
    this.router.navigate(['prodSingle'], { queryParams: { id: index } });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-g7',
  templateUrl: './g7.component.html',
  styleUrls: ['./g7.component.css']
})
export class G7Component {

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['contact']);
  }

}

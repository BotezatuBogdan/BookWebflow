import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-single',
  templateUrl: './prod-single.component.html',
  styleUrls: ['./prod-single.component.css']
})
export class ProdSingleComponent {

  infoText:boolean = true;

  showFirsttext() {
    this.infoText = true;
  }

  showSecondtext() {
    this.infoText = false;
  }

}

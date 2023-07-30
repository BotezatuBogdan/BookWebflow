import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  dropQuestion:boolean = false;

  dropAnswer() {
    this.dropQuestion = !this.dropQuestion;
  }


}

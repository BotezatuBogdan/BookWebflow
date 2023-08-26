import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../snack/snack.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private _snackBar: MatSnackBar) {}

  questions = [
    { question: 'What is Textbook Rental?', text: 'Textbook rental is simple! Now at The Bookstore, you can rent a range of textbooks, and then you return them at the end of the Rental Agreement by the Due Date.' },
    { question: 'Can I purchase a digital book?', text: 'Yes, many titles are available in digital format from our online affiliates. You will see them listed along with other versions of the book, when available.' },
    { question: 'Can I pick up the books in person?', text: 'Yes - choose "In-Store Pickup Next Business Day" as your shipping method. There is no charge for this service, and you can pick up the books without having to stand in line.' },
    { question: 'Do you ship internationally?', text: `Absolutely! Unfortunately, this website cannot generate international shipping quotes. If you'd like to have your books shipped outside of USA.` },
    { question: 'Are shipping changes per book?', text: 'Shipping charges are per order. It is the same price to have one book shipped or several as long as they are shipped in the same package.' }
  ];

  dropQuestions: boolean[] = new Array(this.questions.length).fill(false);

  dropAnswer(index: number) {
    for (let i = 0; i < this.dropQuestions.length; i++) {
      if (i !== index) { this.dropQuestions[i] = false; }
    }
    this.dropQuestions[index] = !this.dropQuestions[index];
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 4000,
    });
  }




}

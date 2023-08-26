import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from 'src/app/snack/snack.component';

@Component({
  selector: 'app-g10',
  templateUrl: './g10.component.html',
  styleUrls: ['./g10.component.css']
})
export class G10Component {

  submitted = false;

  mailForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 4000,
    });
  }

  onSubmit() {
    if (this.mailForm.valid) {
      this.submitted = true;
    }

  }

}

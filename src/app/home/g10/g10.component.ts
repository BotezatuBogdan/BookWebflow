import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from 'src/app/snack/snack.component';

@Component({
  selector: 'app-g10',
  templateUrl: './g10.component.html',
  styleUrls: ['./g10.component.css']
})
export class G10Component {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 4000,
    });
  }

}

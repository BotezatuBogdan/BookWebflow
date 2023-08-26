import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent {

    snackBarRef = inject(MatSnackBarRef);
  
}

import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Book';
  collapsed: boolean | undefined;

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 1100 ) {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    // console.log(screenWidth);
    if (screenWidth < 1100 ) {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }
  }

  onActive() {
    window.scroll(0,0);
  }

  onClick() {
    this.router.navigate(['store']);
  }


  openDialog() {
    const dialogRef = this.dialog.open(CartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}




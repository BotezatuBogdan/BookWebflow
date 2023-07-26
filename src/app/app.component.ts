import { Component, HostListener, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Book';

  collapsed: boolean | undefined;

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



}




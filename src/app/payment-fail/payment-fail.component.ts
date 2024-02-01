import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-fail',
  templateUrl: './payment-fail.component.html',
  styleUrls: ['./payment-fail.component.css']
})
export class PaymentFailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.redirectToHomePage();
    }, 7000);
  }

  redirectToHomePage(): void {
    this.router.navigate(['/']);
  }

}

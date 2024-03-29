import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit{

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

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve data from route params or query params
    
    // Display shipment data on the page
  }

  generatePDF(): void {
    // Call your PDF generation service
    
  }

}

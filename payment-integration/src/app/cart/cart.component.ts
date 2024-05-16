import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PaymentService } from '../payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  firstProduct = 'PIANAI Portable Charger Solar Power Bank 100000mah';
  firstImage = 'pb.jpg';
  firstQuantity = 1;
  firstPrice = 85;
  firstTotal = 85;
  secondProduct = 'USB A to C type cable';
  secondImage = 'ch.jpg';
  secondQuantity = 2;
  secondPrice = 9;
  secondTotal = 18;
  subTotal = 103;
  shipping = 7;
  total = 110;

  constructor(private payment: PaymentService, private router: Router) {}

  ngOnInit(): void {}

  calculate() {
    this.firstTotal = this.firstPrice * this.firstQuantity;
    this.secondTotal = this.secondPrice * this.secondQuantity;
    this.subTotal = this.firstTotal + this.secondTotal;
    this.total = this.subTotal + this.shipping;
  }

  goToPayment() {
    this.payment.totalAmount = this.total;
    this.router.navigate(['payment']);
  }
}

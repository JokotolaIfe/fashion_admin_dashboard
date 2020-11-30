import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments;
  
  constructor(
    public os: OrderService
  ) { }

  ngOnInit(): void {
    this.os.getPayments().subscribe(res=>{
      this.payments = res;
      console.log(this.payments)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { OrderService } from './../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public headers: any;
  public user: any;
  public orders: any;
  public page: number = 1;
  public pageSize: number = 10;

  constructor(
    public os: OrderService
  ) { }

  ngOnInit() {
    this.headers = ['No of Items', 'Name', 'Phone', 'Shipping Fee', 'Total Price', 'Payment Ref', 'Date', 'Status', 'Change Status', ' ']
    this.os.getOrders().subscribe(res=>{
      this.orders = res;
      console.log(this.orders.data)
    },
    error => {
      console.log(error)
      if(error.name === "HttpErrorResponse"){
        this.logout()
      }
    })
  }

  async logout(){
    await localStorage.clear()
    await location.reload()
  }
}

import { Component, OnInit } from '@angular/core';
import { OrderService } from './../services/order.service';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { UserService } from './../services/user.service';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];
    public categories: any;
    public pcs: any;

    users; payments
    public all_products: any[]=[];
    public all_payments: any[]=[];
    public products: any;
    public orders: any;
    public all_users: any[]=[];
    public all_subscriptions: any[]=[];
    // public all_products: any;
    public all_orders: any[]=[];
    public all_categories: any[]=[];
    public all_subcategories: any;
    public all_messages: any;

  constructor(
    public us: UserService,
    public cs: CategoryService,
    public ps: ProductService,
    public os: OrderService
  ) { }

  ngOnInit() {
    this.getAllUsers()
    this.getAllCategories()
    this.getAllProducts()
    this.getAllOrders()
   }

   getAllUsers(){
    this.us.getAllUsers().then(ref => {
      ref.subscribe(res=>{
        this.users = res;
        this.all_users = this.users.data
        console.log(this.all_users)
      },
      error => {
        console.log(error)
        if(error.name === "HttpErrorResponse"){
          this.logout()
        }
      }
      )
    })
  }

  getAllCategories(){
    this.cs.getAllCategories().subscribe(res=>{
      this.categories = res;
      this.all_categories = this.categories.data
    },
      error => {
        console.log(error)
      }
    )
  }

  getAllProducts(){
    this.ps.getAllProducts().then(ref => {
      ref.subscribe(res=>{
        this.products = res;
        this.all_products = this.products.data;
        console.log(this.all_users)
      },
        error => {
          console.log(error)
        }
      )
    })
  }

  getAllPayments(){
    this.os.getPayments().subscribe(res=>{
        this.payments = res;
        this.all_payments = this.payments.data
        console.log(this.all_payments)
      },
        error => {
          console.log(error)
        }
      )
  }

  getAllOrders(){
    this.os.getOrders().subscribe(res=>{
      this.orders = res;
      this.all_orders = this.orders.data
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

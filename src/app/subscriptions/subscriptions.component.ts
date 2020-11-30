import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public headers: any;
  public subs: any;
  public page: number = 1;
  public pageSize: number = 10;
  
  constructor(
  ) { }

  ngOnInit(): void {
   
    this.headers = ['Email', 'Date'] 
  }

  getAllSubscriptions(){
    // return this.afs.collection('subscriptions')
  }
}

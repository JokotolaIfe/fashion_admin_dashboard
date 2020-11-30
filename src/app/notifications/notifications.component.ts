// import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public headers: any;
  public messages: any;
  public page: number = 1;
  public pageSize: number = 10;
  
  constructor(
    // public afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.headers = ['Date', 'Name', 'Email', 'Subject' ,'Message', ''] 
  }

}

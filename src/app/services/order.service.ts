import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl = 'http://arike.malonglobaltech.com/api/admin/orders'
  paymentsUrl = 'http://arike.malonglobaltech.com/api/admin/payments'

  constructor(
      public http: HttpClient
    ) { }

  // async getOrder(uid){
  //   return this.afs.collection('orders', ref => ref.where('userId', '==', uid))
  // }

  getOrders(){
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return this.http.get(this.orderUrl, { headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Accept: 'application/json',
      Authorization: `bearer ${token}`
      })
    })
  }

  getPayments(){
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return this.http.get(this.paymentsUrl, { headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Accept: 'application/json',
      Authorization: `bearer ${token}`
      })
    })
  }
}

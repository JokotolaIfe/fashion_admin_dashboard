import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = "https://arike.malonglobaltech.com/api/admin/products";

  constructor(
    public http: HttpClient
  ) { }


  async addProduct(obj) {
    let token = await JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return this.http.post(this.productUrl, obj, {
      headers: new HttpHeaders({        
        Authorization: `Bearer ${token}`  
        })
    })
  }
  
  async updateProduct(obj, id) {
    let token = await JSON.parse(localStorage.getItem('token'));
    console.log(token)
    const url = await this.productUrl+'/'+id
    return this.http.put(url, obj, {
      headers: new HttpHeaders({  
        'Content-Type': 'application/json',
        'Accept': 'application/json',      
        Authorization: `Bearer ${token}`  
        })
    })
  }

  async deleteProduct(id) {
    let token = await JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return this.http.delete(this.productUrl+'/'+id, {
      headers: new HttpHeaders({        
        Authorization: `Bearer ${token}`  
        })
    })
  }

  async removeColor(product_id, color_id) {
    let token = await JSON.parse(localStorage.getItem('token'));
      console.log(token)
        const url = await this.productUrl+'/'+product_id+'/colours/'+color_id;
        console.log(url)
          return this.http.delete(url, {
            headers: new HttpHeaders({        
              Authorization: `Bearer ${token}`  
        })
    })
  }

  async addColor(obj, product_id) {
    let token = await JSON.parse(localStorage.getItem('token'));
      console.log(token)
        const url = await this.productUrl+'/'+product_id
          return this.http.post(url, {
            headers: new HttpHeaders({        
              Authorization: `Bearer ${token}`  
        })
    })
  }

  async getAllProducts() {
    let token = await JSON.parse(localStorage.getItem('token'));
    console.log(token)
    return await this.http.get(this.productUrl, {
      headers: new HttpHeaders({   
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${token}`  
        })
    })
  }
}

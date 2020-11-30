import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  token; headers; response; error
  categoriesUrl: string =  "https://arike.malonglobaltech.com/api/admin/categories";

  constructor(
    // public afs: AngularFirestore,
    public http: HttpClient
  ) { 
    this.token = JSON.parse(localStorage.getItem('token'));
    console.log(this.token)
    this.headers = { headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Accept: 'application/json',
      authorization: `Bearer ${this.token}`,
    })
  }
  }

  getAllCategories(){
    console.log(this.token)
    return this.http.get(this.categoriesUrl, { headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Accept: 'application/json',
        Authorization: `bearer ${this.token}`
      })
    })
  }

  addAcategory(obj){
    console.log(this.categoriesUrl, obj, this.headers)
    return this.http.post(this.categoriesUrl, obj, this.headers)
  }

  updateCategory(obj, id){
    return this.http.put(this.categoriesUrl+'/'+id, obj, this.headers)
  }

  deleteCategory(id){
    return this.http.delete(this.categoriesUrl+'/'+id, this.headers)
  }

  getProductsInCategory(id){
    return this.http.delete(this.categoriesUrl+'/'+id+'/products', this.headers)
  }
}

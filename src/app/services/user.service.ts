import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  categoriesUrl: string =  "https://arike.malonglobaltech.com/api/admin/categories";
  usersUrl: string =  "https://arike.malonglobaltech.com/api/admin/users";

  constructor(
    public http: HttpClient
  ) { }

 async getAllUsers(){
    const token = await JSON.parse(localStorage.getItem('token'));
      return await this.http.get(this.usersUrl, { headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        Authorization: `bearer ${token}`
      })
    })
  }

  async updateUser(id, obj){
    const token = await JSON.parse(localStorage.getItem('token'));
    const url = await this.usersUrl+'/'+id;
    console.log(token, url, obj)
    return this.http.put(url, obj, { headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        Authorization: `bearer ${token}`
      })
    })
  }
}

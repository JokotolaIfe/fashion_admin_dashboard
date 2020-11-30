import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = "https://arike.malonglobaltech.com/api/login";


  constructor(
    public http: HttpClient
  ) { }


  login(obj){
    return this.http.post(this.loginUrl, obj, {
      headers: new HttpHeaders({        
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
      })
  }

}

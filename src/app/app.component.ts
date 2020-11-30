import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public email: string;
  public password: string;
  public admin: any;
  public loading: boolean = false;
  public showMe: boolean = false;
  public user: boolean = false;
  public error: any;
  public loggedInUser: any;
  public response: any;

     constructor(
       public location: Location,
        public as: AuthService
       ) {}

    ngOnInit(){
      this.response = JSON.parse(localStorage.getItem('response'))
      console.log(this.response)
    }

    async signIn(email, password){
           this.loading = await true
      console.log(email, password)
      const obj = await JSON.stringify({email: email, password: password})
      this.as.login(obj).subscribe(async res=>{
        console.log(res)
      this.loading = await false

        this.response = await res
        if(res){
          await localStorage.setItem('response', JSON.stringify(this.response));
          await localStorage.setItem('token', JSON.stringify(this.response.access_token));
          await localStorage.setItem('user_details', JSON.stringify(this.response.data));
          await localStorage.setItem('isLoggedIn', 'true')
          await location.reload()
        }
      },
      error =>{
        this.loading = false
        console.log(error)
        this.error = error;
        if(this.error.error.error){
          alert('Oops '+this.error.error.error)
        }
        else if(this.error.error.message){
          alert('Oops '+this.error.error.message)
        }
      })
    }
  // async login(email, password){
  //    this.loading = await true


  //    try {
  //     await this.afa.auth.signInWithEmailAndPassword(email, password).then(async res=>{
  //       console.log(res)
  //      return await this.afs.collection('admin').doc(res.user.uid).valueChanges().subscribe(async resp=>{
  //        this.admin = await resp;
  //        console.log(this.admin)
  //        if(this.admin){
  //          this.showMe = true
  //          location.reload()
  //        }
  //        else {
  //          this.showMe = false
  //        }
  //      })
  //    }).then(ref=>{
  //      this.loading = false
  //    })
     
  //   } catch (error) {
  //       if(error){
  //         this.loading = false
  //       }

  //     console.log(error)

  //     if (error.code === "auth/network-request-failed"){
  //     console.log("Network not found!")
  //    this.error = "Error, Failed Network Error"
  //    }

  //     if (error.code === "auth/wrong-password"){
  //       this.error = "Error, Incorrect password"
  //       }

  //     if (error.code === "auth/user-not-found"){
  //       this.error = "Error, User Not found"
  //     }

  //     if (error.code === "auth/invalid-email"){
  //       this.error = "Error, Invalid email"
  //     }

  //     }
  
  // }
}

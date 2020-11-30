import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  public all_users: any;
  public headers: any;
  public page: number = 1;
  public pageSize: number = 10;
  
  constructor(
    public us: UserService
  ) { }

  ngOnInit() {
    this.headers = ['Name', 'Phone', 'Email', 'Registered', 'Role', 'Deactivate']
  }

  ngAfterViewInit(){
    this.getUsers()
  }
  
  getUsers(){
    this.us.getAllUsers().then(ref=>{
      ref.subscribe(resp =>{
        console.log(resp)
        this.all_users = resp;
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

  async changeRole(id, role){
    console.log(id, role)
    if(role == 'admin'){
      console.log('switch to user')
      const obj = await JSON.stringify({role:'user'})
      await this.us.updateUser(id, obj).then(ref=>{
        ref.subscribe(async resp => {
          if(resp){
            await this.getUsers()
            alert('User role updated successfully')
          }
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
     if(role == 'user'){
      console.log('switch to admin')
      const obj = await JSON.stringify({role:'admin'})
      await this.us.updateUser(id, obj).then(ref=>{
          ref.subscribe(async resp => {
            if(resp){
              await this.getUsers()
              alert('User role updated successfully')
            }
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
  }

  async deactivate(id, active){
    console.log(id, active)
    if(active === '1'){
      console.log('switch to user')
      const obj = await JSON.stringify({is_active: false})
      await this.us.updateUser(id, obj).then(ref=>{
        ref.subscribe(async resp => {
          if(resp){
            await this.getUsers()
            alert('User role updated successfully')
          }
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
     if(active === '0'){
      console.log('switch to admin')
      const obj = await JSON.stringify({is_active: true})
      await this.us.updateUser(id, obj).then(ref=>{
          ref.subscribe(async resp => {
            if(resp){
              await this.getUsers()
              alert('User role updated successfully')
            }
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
  }

  async logout(){
    await localStorage.clear()
    await location.reload()
  }
}

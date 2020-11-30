import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators'
import { CategoryService } from './../services/category.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    
    public tableData1: TableData;
    public tableData2: TableData;
    public parent: any;

    public category: string;
    public categories: any;
    public headers: any;
    public headers2: any;

    public parent_category: string;
    public subcategory_name: string;
    public subcategory: any;
    public subcategories: any;
    public allcategories: any;

    public uploadFlag: any;
    public uploadPercent: any;
    public picture: any;
    public loading: boolean = false;

    response; sub_response; error; sub_error;
  constructor(
    public cs: CategoryService
  ) { }

  ngOnInit() {
   this.getCategories()

    this.headers = [ 'Image', 'Name', 'Modified', 'Featured', '']
    this.sub_response = res =>{
      this.response = res;
      if(this.response === 'success'){
        alert('Operation Successful')
      }
    }
    this.sub_error = error =>{
      if(error.name === "HttpErrorResponse"){
        this.logout()
      }
      this.error = error;
    }
  }

  async addAcategory(category){
      console.log(category)
      await this.add(category).then(ref=>{
          this.loading = false;
          this.category = "";
          this.picture = "";
      })
  }
  
    async add(category){
      const obj = await JSON.stringify({name: category})
      await this.cs.addAcategory(obj).subscribe(this.sub_response, this.error)
      console.log(await this.response, await this.error)
      await setTimeout(async () => {       await this.refresh()     }, 2000);    
    }

    async getCategories(){
      this.cs.getAllCategories().subscribe(async res => {
        this.categories = await res;
        this.allcategories = await this.categories.data;
        console.log(this.allcategories);
      },
        error => {
          if(error.name === "HttpErrorResponse"){
            this.logout()
          }
        }
      ) 
    }

    async deleteCategory(id){
      await this.cs.deleteCategory(id).subscribe(this.sub_response, this.sub_error)
      console.log(await this.response, await this.error)
      await setTimeout(async () => {       await this.refresh()     }, 2000);    
    }

    async editCategory(id, name){
      const obj = await JSON.stringify({name: name})
      await this.cs.updateCategory(obj, id).subscribe(this.sub_response, this.sub_error)
      console.log(await this.response, await this.error)
      await setTimeout(async () => {       await this.refresh()     }, 2000);    
    }

    refresh(){
      this.getCategories()
    }

    async logout(){
      await localStorage.clear()
      await location.reload()
    }
}

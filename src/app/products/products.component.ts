import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators'
import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;
  public categories: any;
  public subcategories: any;
  public headers: any;
  
  public color_price: any;
  public color_image: File; 
  public page: number = 1;
  public pageSize: number = 10;

  gender: string = 'male'
  public availablecolors2: any[] = [' ']

  public availablecolors: any[] = [' ']
  // Sizes;
  a1; a2; a3; a4; a5; a6; a7; a8; response
  name; price; category: number; fileToUpload: File;

  constructor(
    public cs: CategoryService,
    public ps: ProductService
  ) { }

  ngOnInit(): void {
    this.headers = ['Image', 'Name', 'Price', 'Category', 'Gender', 'Colors', '']

    // this.headers = ['Image', 'Name', 'Price', 'Category', 'Gender', 'Modified', 'Availablity', 'Featured', 'Best Selling', '']

    this.cs.getAllCategories().subscribe(res=>{
      console.log(res)
      this.categories = res;
    },
      error => {
        console.log(error)
        if(error.name === "HttpErrorResponse"){
          this.logout()
        }
      }
    )
  }

  ngAfterViewInit(){
    this.refresh()
  }


  refresh(){
    this.ps.getAllProducts().then(ref=>{
      ref.subscribe(res => {
        this.products = res;
        console.log(this.products)
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

  
  async onFileChanged(e) {
    var files = await e.target.files;
    this.fileToUpload = await files[0];
  }

  // _handleReaderLoaded(readerEvt) {
  //   var binaryString = readerEvt.target.result;
  //   this.fileToUpload = btoa(binaryString);
  //         //  this.fileToUpload ='data:image/jpeg;base64,'+btoa(binaryString);
  //          console.log(btoa(binaryString));
  //          console.log(this.fileToUpload)
  //  }

    // async getSizes(){
    //   console.log(this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8)
    //   const sizes = [this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8]
    //   for(let i = 0; i < sizes.length; i++){
    //     console.log(i);
    //     if(sizes[i]){
    //       console.log('i is not empty oo')
    //       available_sizes.push(sizes[i])
    //     }
    //     else if (sizes[i]){
    //       console.log('i is empty')  
    //     }
    //   }
    //   console.log(available_sizes)
    //   return await available_sizes;
    // }
    
    setSize(a1){
      this.a1 = a1
    }

    async addUp(colors, image: File, name){
      await this.popUpEmpty(colors)
      console.log(name, image)
      await this.availablecolors.push({name: name, image: image})
      console.log(this.availablecolors)

      var reader = await new FileReader();
      var image2;
      await reader.readAsDataURL(image); 
      reader.onload = async (_event) => { 
        image2 = reader.result; 
        await this.availablecolors2.push({name: name, image: image2})
      }
      console.log(this.availablecolors2, image2)
      await this.color_image;
      this.color_price = await ''
     
    }

    popUp(){
      this.availablecolors.pop();
      console.log(this.availablecolors)
      this.availablecolors2.pop();
      console.log(this.availablecolors)
    }

    popUpEmpty(colors){
      if(!colors[0].name){
        this.popUp()
      }
    }

    addImage(e){
      if (e.target.files.length > 0) {
        this.color_image = e.target.files[0];
      }
    }


    async submit(name, price, category, availablecolors, gender){
      console.log(name, price, category, availablecolors)

      const formData = await new FormData()

      for(let i = 0; i < await availablecolors.length; i++){
        var _key_name = await 'colours'+'['+i+']'+'[name]'
        var _key_image = await 'colours'+'['+i+']'+'[image]'
        var image_name = await JSON.stringify(new Date().getTime())+'jpg'
        console.log(_key_image, _key_name, image_name)

        await formData.append(_key_name, availablecolors[i].name);
        await formData.append(_key_image, availablecolors[i].image);
      }
      
      await formData.append('name', name);
      await formData.append('price', price);
      await formData.append('category_id', category);
      // await formData.append('colours', availablecolors);
      await formData.append('gender', gender);
      console.log(await formData) 

      await this.ps.addProduct(await formData).then((ref)=>{
        ref.subscribe(res => {
          console.log(res)
          this.response = res;
          if(this.response.status ==='success'){
            window.location.reload()
          }
        },
          error => {
            console.log(error)
           }
         )
      })
      setTimeout(() => {
        this.refresh()
      }, 2500);
    }

    async logout(){
      await localStorage.clear()
      await location.reload()
    }

    async deleteProduct(id){
      await this.ps.deleteProduct(id).then(ref=>{
        ref.subscribe(res=>{
          console.log(res)
        },
          error =>{
            console.log(error)
          }
        )
      }).then(()=>{
        setTimeout(() => {
          this.refresh()
        }, 1500);
      })
    }

    async removeColor(product_id, color_id){
      this.ps.removeColor(product_id, color_id).then(ref=>{
        ref.subscribe(res=>{
          console.log(res)
            if(res){
              location.reload()
            }
          },
          error => {
            console.log(error)
          }
        )
      })
    }

    async update(name, price, id){
      const obj = await {name: name, price: price}
      this.ps.updateProduct(JSON.stringify(obj), id).then(ref=>{
        ref.subscribe(res=>{
          console.log(res)
            if(res){
              this.refresh()
            }
          },
          error => {
            console.log(error)
          }
        )
      })
    }
}

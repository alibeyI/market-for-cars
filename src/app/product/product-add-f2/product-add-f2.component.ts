import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-f2',
  templateUrl: './product-add-f2.component.html',
  styleUrls: ['./product-add-f2.component.css'],
  providers:[CategoryService,ProductService] 
})
export class ProductAddF2Component implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductService
    ) { }
productAddForm:FormGroup;
product:Product = new Product;
categories:Category[];
 createProductAddForm(){
   this.productAddForm = this.formBuilder.group({
     manufacturer:["",Validators.required],
     model:["",Validators.required],
     year:["",Validators.required],
     description:["",Validators.required],
     imgUrl:["",Validators.required],
     price:["",Validators.required],
     categoryId:["",Validators.required],

   })
 }
  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }

  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }

    this.productService.addProduct(this.product).subscribe(data=>{
      alert(data.manufacturer + " added")
    })
  }

}

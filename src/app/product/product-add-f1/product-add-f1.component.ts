import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-f1',
  templateUrl: './product-add-f1.component.html',
  styleUrls: ['./product-add-f1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddF1Component implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
    ) { }

  modell : Product = new Product();
  categories : Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }
  add(form:NgForm){
    this.productService.addProduct(this.modell).subscribe(data=>{
      alert(data.id +" added")
    })
  }

}

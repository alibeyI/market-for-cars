import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddF1Component } from './product/product-add-f1/product-add-f1.component';
import { ProductAddF2Component } from './product/product-add-f2/product-add-f2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'products-add-1',component:ProductAddF1Component,canActivate:[LoginGuard]},
  {path:'products-add-2',component:ProductAddF2Component},
  {path:'',redirectTo: 'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

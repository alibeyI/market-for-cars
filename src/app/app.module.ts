import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddF1Component } from './product/product-add-f1/product-add-f1.component';
import { ProductAddF2Component } from './product/product-add-f2/product-add-f2.component';
import { LoginComponent } from './login/login.component'
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NavComponent,
    ProductFilterPipe,
    ProductAddF1Component,
    ProductAddF2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

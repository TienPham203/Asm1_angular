import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Pages/Admin/product-list/product-list.component';
import { AddProductComponent } from './Pages/Admin/add-product/add-product.component';
import { EditProductComponent } from './Pages/Admin/edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashBroadComponent } from './Pages/Admin/dash-broad/dash-broad.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    DashBroadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

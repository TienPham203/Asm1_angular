import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBroadComponent } from './Component/dash-broad/dash-broad.component';
import { AddProjectComponent } from './Component/add-project/add-project.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { UpdateupdateProductComponent } from './Component/updateupdate-product/updateupdate-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashBroadComponent,
    AddProjectComponent,
    ProductListComponent,
    UpdateupdateProductComponent,

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

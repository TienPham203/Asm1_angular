import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBroadComponent } from './Pages/Admin/dash-broad/dash-broad.component';
import { ProductListComponent } from './Pages/Admin/product-list/product-list.component';
import { AddProductComponent } from './Pages/Admin/add-product/add-product.component';
import { EditProductComponent } from './Pages/Admin/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'admin', component: DashBroadComponent, children: [
      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/:id/edit', component: EditProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

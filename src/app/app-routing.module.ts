import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBroadComponent } from './Component/dash-broad/dash-broad.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { AddProjectComponent } from './Component/add-project/add-project.component';
import { UpdateupdateProductComponent } from './Component/updateupdate-product/updateupdate-product.component';


const routes: Routes = [
  {
    path: '', component: DashBroadComponent, children: [
      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: AddProjectComponent },
      { path: 'product/:id/edit', component: UpdateupdateProductComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

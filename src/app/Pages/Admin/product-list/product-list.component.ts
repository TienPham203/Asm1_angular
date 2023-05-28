import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product: IProduct[] = []
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(product => {
      this.product = product
    })
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.product = this.product.filter(item => item.id != id)
    })
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    image: ""
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProductById(id).subscribe(product => {
        this.product = product
      })
    })
  }
  onHandleUpdate() {
    this.productService.updateProduct(this.product).subscribe(product => {
      this.product = product
      this.router.navigate(['admin/product'])
    })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    image: ""
  }
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(product => {
      this.product = product
      this.router.navigate(['admin/product'])
    })
  }


}

import { Component } from '@angular/core';
import { IProject } from 'src/app/Interface/project';
import { ProjectService } from 'src/app/Service/project.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product: IProject[] = []
  constructor(private projectService: ProjectService) {
    this.projectService.getProject().subscribe(product => {
      this.product = product
    })
  }

  removeItem(id: any) {
    this.projectService.deleteProject(id).subscribe(item => {
      this.product = this.product.filter(item => item.id != id)
      alert("Xóa thành công")
    })
  }

}

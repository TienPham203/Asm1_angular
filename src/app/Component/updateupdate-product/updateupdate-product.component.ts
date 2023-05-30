import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/Interface/project';
import { ProjectService } from 'src/app/Service/project.service';

@Component({
  selector: 'app-updateupdate-product',
  templateUrl: './updateupdate-product.component.html',
  styleUrls: ['./updateupdate-product.component.scss']
})
export class UpdateupdateProductComponent {
  product: IProject = {
    name: "",
    price: 0,
    image: "  "
  }
  constructor(private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.projectService.getProjectById(id).subscribe(product => {
        this.product = product
      })
    })
  }

  onHandleUpdate() {
    this.projectService.updateProject(this.product).subscribe(product => {
      this.product = product
      this.router.navigate(['product'])
      alert("Sửa thành công")
    })
  }
}

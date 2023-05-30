import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/Interface/project';
import { ProjectService } from 'src/app/Service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  product: IProject = {
    name: "",
    price: 0,
    image: ""
  }
  constructor(private projectService: ProjectService,
    private router: Router) { }
  onHandleSubmit() {
    this.projectService.addProject(this.product).subscribe(data => {
      this.product = data
      this.router.navigate(['/product'])
    })
  }

}


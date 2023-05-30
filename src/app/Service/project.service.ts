import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { IProject } from '../Interface/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`http://localhost:3000/products`)
  }
  getProjectById(id: number): Observable<IProject> {
    return this.http.get<IProject>(`http://localhost:3000/products/${id}`)
  }
  deleteProject(id: number): Observable<IProject> {
    return this.http.delete<IProject>(`http://localhost:3000/products/${id}`)
  }
  addProject(product: IProject): Observable<IProject> {
    return this.http.post<IProject>(`http://localhost:3000/products`, product)
  }
  updateProject(product: IProject): Observable<IProject> {
    return this.http.put<IProject>(`http://localhost:3000/products/${product.id}`, product)
  }
}

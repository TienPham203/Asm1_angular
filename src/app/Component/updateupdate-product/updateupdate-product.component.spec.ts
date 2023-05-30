import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateupdateProductComponent } from './updateupdate-product.component';

describe('UpdateupdateProductComponent', () => {
  let component: UpdateupdateProductComponent;
  let fixture: ComponentFixture<UpdateupdateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateupdateProductComponent]
    });
    fixture = TestBed.createComponent(UpdateupdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

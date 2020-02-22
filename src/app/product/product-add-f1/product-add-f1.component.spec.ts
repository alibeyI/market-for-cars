import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddF1Component } from './product-add-f1.component';

describe('ProductAddF1Component', () => {
  let component: ProductAddF1Component;
  let fixture: ComponentFixture<ProductAddF1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddF1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

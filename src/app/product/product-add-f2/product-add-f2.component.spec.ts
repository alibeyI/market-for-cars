import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddF2Component } from './product-add-f2.component';

describe('ProductAddF2Component', () => {
  let component: ProductAddF2Component;
  let fixture: ComponentFixture<ProductAddF2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddF2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

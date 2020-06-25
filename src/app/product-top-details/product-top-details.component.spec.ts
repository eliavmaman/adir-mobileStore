import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopDetailsComponent } from './product-top-details.component';

describe('ProductTopDetailsComponent', () => {
  let component: ProductTopDetailsComponent;
  let fixture: ComponentFixture<ProductTopDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTopDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

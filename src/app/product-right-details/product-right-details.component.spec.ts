import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRightDetailsComponent } from './product-right-details.component';

describe('ProductRightDetailsComponent', () => {
  let component: ProductRightDetailsComponent;
  let fixture: ComponentFixture<ProductRightDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRightDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

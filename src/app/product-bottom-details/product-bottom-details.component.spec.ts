import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBottomDetailsComponent } from './product-bottom-details.component';

describe('ProductBottomDetailsComponent', () => {
  let component: ProductBottomDetailsComponent;
  let fixture: ComponentFixture<ProductBottomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBottomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBottomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadjetsSectionComponent } from './gadjets-section.component';

describe('GadjetsSectionComponent', () => {
  let component: GadjetsSectionComponent;
  let fixture: ComponentFixture<GadjetsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadjetsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadjetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

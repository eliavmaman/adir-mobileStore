import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadSectionComponent } from './ipad-section.component';

describe('IpadSectionComponent', () => {
  let component: IpadSectionComponent;
  let fixture: ComponentFixture<IpadSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpadSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

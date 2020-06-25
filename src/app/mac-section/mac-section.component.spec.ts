import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacSectionComponent } from './mac-section.component';

describe('MacSectionComponent', () => {
  let component: MacSectionComponent;
  let fixture: ComponentFixture<MacSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

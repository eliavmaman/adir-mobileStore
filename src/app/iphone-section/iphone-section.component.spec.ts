import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneSectionComponent } from './iphone-section.component';

describe('IphoneSectionComponent', () => {
  let component: IphoneSectionComponent;
  let fixture: ComponentFixture<IphoneSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

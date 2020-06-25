import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdirComponent } from './adir.component';

describe('AdirComponent', () => {
  let component: AdirComponent;
  let fixture: ComponentFixture<AdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

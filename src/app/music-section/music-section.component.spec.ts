import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSectionComponent } from './music-section.component';

describe('MusicSectionComponent', () => {
  let component: MusicSectionComponent;
  let fixture: ComponentFixture<MusicSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

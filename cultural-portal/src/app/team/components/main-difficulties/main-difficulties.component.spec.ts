import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDifficultiesComponent } from './main-difficulties.component';

describe('MainDifficultiesComponent', () => {
  let component: MainDifficultiesComponent;
  let fixture: ComponentFixture<MainDifficultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDifficultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDifficultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

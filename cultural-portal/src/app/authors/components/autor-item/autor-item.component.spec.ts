import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorItemComponent } from './autor-item.component';

describe('AutorItemComponent', () => {
  let component: AutorItemComponent;
  let fixture: ComponentFixture<AutorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

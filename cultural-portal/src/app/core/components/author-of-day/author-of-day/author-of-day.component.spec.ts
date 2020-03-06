import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorOfDayComponent } from './author-of-day.component';

describe('AuthorOfDayComponent', () => {
  let component: AuthorOfDayComponent;
  let fixture: ComponentFixture<AuthorOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

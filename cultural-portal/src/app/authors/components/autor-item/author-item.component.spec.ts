import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorItemComponent } from './author-item.component';

describe('AuthorItemComponent', () => {
  let component: AuthorItemComponent;
  let fixture: ComponentFixture<AuthorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

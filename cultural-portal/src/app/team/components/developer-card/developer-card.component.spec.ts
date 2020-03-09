import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperCardComponent } from './developer-card.component';

describe('DeveloperCardComponent', () => {
  let component: DeveloperCardComponent;
  let fixture: ComponentFixture<DeveloperCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

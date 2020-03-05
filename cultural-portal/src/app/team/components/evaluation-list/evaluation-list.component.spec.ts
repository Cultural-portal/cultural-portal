import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationListComponent } from './evaluation-list.component';

describe('EvaluationListComponent', () => {
  let component: EvaluationListComponent;
  let fixture: ComponentFixture<EvaluationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

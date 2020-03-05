import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationScopeComponent } from './evaluation-scope.component';

describe('EvaluationScopeComponent', () => {
  let component: EvaluationScopeComponent;
  let fixture: ComponentFixture<EvaluationScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

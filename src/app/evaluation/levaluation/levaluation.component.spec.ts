import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevaluationComponent } from './levaluation.component';

describe('LevaluationComponent', () => {
  let component: LevaluationComponent;
  let fixture: ComponentFixture<LevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

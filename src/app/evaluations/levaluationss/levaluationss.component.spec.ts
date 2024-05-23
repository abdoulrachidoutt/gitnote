import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevaluationssComponent } from './levaluationss.component';

describe('LevaluationssComponent', () => {
  let component: LevaluationssComponent;
  let fixture: ComponentFixture<LevaluationssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevaluationssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevaluationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

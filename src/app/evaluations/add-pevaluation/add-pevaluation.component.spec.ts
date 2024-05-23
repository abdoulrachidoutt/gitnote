import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPevaluationComponent } from './add-pevaluation.component';

describe('AddPevaluationComponent', () => {
  let component: AddPevaluationComponent;
  let fixture: ComponentFixture<AddPevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPevaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

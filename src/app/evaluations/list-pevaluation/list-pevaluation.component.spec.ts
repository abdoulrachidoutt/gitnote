import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPevaluationComponent } from './list-pevaluation.component';

describe('ListPevaluationComponent', () => {
  let component: ListPevaluationComponent;
  let fixture: ComponentFixture<ListPevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPevaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

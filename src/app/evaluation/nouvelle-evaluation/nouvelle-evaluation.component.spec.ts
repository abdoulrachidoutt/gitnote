import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleEvaluationComponent } from './nouvelle-evaluation.component';

describe('NouvelleEvaluationComponent', () => {
  let component: NouvelleEvaluationComponent;
  let fixture: ComponentFixture<NouvelleEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

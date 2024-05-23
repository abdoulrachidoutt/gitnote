import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleMatiereComponent } from './nouvelle-matiere.component';

describe('NouvelleMatiereComponent', () => {
  let component: NouvelleMatiereComponent;
  let fixture: ComponentFixture<NouvelleMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleMatiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

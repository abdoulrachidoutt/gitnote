import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauResponsableComponent } from './nouveau-responsable.component';

describe('NouveauResponsableComponent', () => {
  let component: NouveauResponsableComponent;
  let fixture: ComponentFixture<NouveauResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauResponsableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

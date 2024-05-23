import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleDirectionComponent } from './nouvelle-direction.component';

describe('NouvelleDirectionComponent', () => {
  let component: NouvelleDirectionComponent;
  let fixture: ComponentFixture<NouvelleDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleDirectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

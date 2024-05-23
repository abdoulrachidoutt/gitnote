import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousStructureComponent } from './sous-structure.component';

describe('SousStructureComponent', () => {
  let component: SousStructureComponent;
  let fixture: ComponentFixture<SousStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SousStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SousStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

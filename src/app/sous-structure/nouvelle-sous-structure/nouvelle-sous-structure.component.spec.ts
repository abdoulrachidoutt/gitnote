import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleSousStructureComponent } from './nouvelle-sous-structure.component';

describe('NouvelleSousStructureComponent', () => {
  let component: NouvelleSousStructureComponent;
  let fixture: ComponentFixture<NouvelleSousStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleSousStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleSousStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

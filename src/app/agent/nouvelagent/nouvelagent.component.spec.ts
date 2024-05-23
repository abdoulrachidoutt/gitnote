import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelagentComponent } from './nouvelagent.component';

describe('NouvelagentComponent', () => {
  let component: NouvelagentComponent;
  let fixture: ComponentFixture<NouvelagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

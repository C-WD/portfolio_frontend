import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreComponentComponent } from './sobre-component.component';

describe('SobreComponentComponent', () => {
  let component: SobreComponentComponent;
  let fixture: ComponentFixture<SobreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaverButtonComponent } from './waver-button.component';

describe('WaverButtonComponent', () => {
  let component: WaverButtonComponent;
  let fixture: ComponentFixture<WaverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaverButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaverNumbersComponent } from './waver-numbers.component';

describe('WaverNumbersComponent', () => {
  let component: WaverNumbersComponent;
  let fixture: ComponentFixture<WaverNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaverNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaverNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

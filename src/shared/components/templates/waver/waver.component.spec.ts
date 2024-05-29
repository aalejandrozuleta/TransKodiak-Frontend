import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaverComponent } from './waver.component';

describe('WaverComponent', () => {
  let component: WaverComponent;
  let fixture: ComponentFixture<WaverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

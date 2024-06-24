import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOptionsNavVehicleComponent } from './btn-options-nav-vehicle.component';

describe('BtnOptionsNavVehicleComponent', () => {
  let component: BtnOptionsNavVehicleComponent;
  let fixture: ComponentFixture<BtnOptionsNavVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnOptionsNavVehicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnOptionsNavVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOptionsTableVehicleComponent } from './nav-options-table-vehicle.component';

describe('NavOptionsTableVehicleComponent', () => {
  let component: NavOptionsTableVehicleComponent;
  let fixture: ComponentFixture<NavOptionsTableVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOptionsTableVehicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavOptionsTableVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BtnOptionsNavVehicleComponent } from '@molecules/btn-options-nav-vehicle/btn-options-nav-vehicle.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarVehicleCompanyComponent } from './nav-bar-vehicle-company.component';

describe('NavBarVehicleCompanyComponent', () => {
  let component: NavBarVehicleCompanyComponent;
  let fixture: ComponentFixture<NavBarVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarVehicleCompanyComponent, BtnOptionsNavVehicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

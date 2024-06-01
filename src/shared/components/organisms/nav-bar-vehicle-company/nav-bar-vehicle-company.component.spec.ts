import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarVehicleCompanyComponent } from './nav-bar-vehicle-company.component';

describe('NavBarVehicleCompanyComponent', () => {
  let component: NavBarVehicleCompanyComponent;
  let fixture: ComponentFixture<NavBarVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

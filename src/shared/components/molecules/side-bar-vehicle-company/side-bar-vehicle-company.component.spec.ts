import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarVehicleCompanyComponent } from './side-bar-vehicle-company.component';

describe('SideBarVehicleCompanyComponent', () => {
  let component: SideBarVehicleCompanyComponent;
  let fixture: ComponentFixture<SideBarVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

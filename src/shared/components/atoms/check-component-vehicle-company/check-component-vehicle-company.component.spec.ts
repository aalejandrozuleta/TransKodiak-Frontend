import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckComponentVehicleCompanyComponent } from './check-component-vehicle-company.component';

describe('CheckComponentVehicleCompanyComponent', () => {
  let component: CheckComponentVehicleCompanyComponent;
  let fixture: ComponentFixture<CheckComponentVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckComponentVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckComponentVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

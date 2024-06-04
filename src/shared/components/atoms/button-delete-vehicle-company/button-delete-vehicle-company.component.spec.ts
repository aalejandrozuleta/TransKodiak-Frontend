import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteVehicleCompanyComponent } from './button-delete-vehicle-company.component';

describe('ButtonDeleteVehicleCompanyComponent', () => {
  let component: ButtonDeleteVehicleCompanyComponent;
  let fixture: ComponentFixture<ButtonDeleteVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDeleteVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDeleteVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

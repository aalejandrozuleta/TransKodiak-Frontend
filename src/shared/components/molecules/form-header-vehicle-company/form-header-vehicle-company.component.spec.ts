import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeaderVehicleCompanyComponent } from './form-header-vehicle-company.component';

describe('FormHeaderVehicleCompanyComponent', () => {
  let component: FormHeaderVehicleCompanyComponent;
  let fixture: ComponentFixture<FormHeaderVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHeaderVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHeaderVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

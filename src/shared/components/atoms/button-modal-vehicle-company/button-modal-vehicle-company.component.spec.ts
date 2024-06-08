import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModalVehicleCompanyComponent } from './button-modal-vehicle-company.component';

describe('ButtonModalVehicleCompanyComponent', () => {
  let component: ButtonModalVehicleCompanyComponent;
  let fixture: ComponentFixture<ButtonModalVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModalVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonModalVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

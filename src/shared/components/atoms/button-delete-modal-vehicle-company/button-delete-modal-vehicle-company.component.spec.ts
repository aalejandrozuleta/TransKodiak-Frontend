import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteModalVehicleCompanyComponent } from './button-delete-modal-vehicle-company.component';

describe('ButtonDeleteModalVehicleCompanyComponent', () => {
  let component: ButtonDeleteModalVehicleCompanyComponent;
  let fixture: ComponentFixture<ButtonDeleteModalVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDeleteModalVehicleCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDeleteModalVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

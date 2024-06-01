import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCompanyComponent } from './vehicle-company.component';

describe('VehicleCompanyComponent', () => {
  let component: VehicleCompanyComponent;
  let fixture: ComponentFixture<VehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

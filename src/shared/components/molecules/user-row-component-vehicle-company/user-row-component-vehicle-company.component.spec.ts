import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRowComponentVehicleCompanyComponent } from './user-row-component-vehicle-company.component';

describe('UserRowComponentVehicleCompanyComponent', () => {
  let component: UserRowComponentVehicleCompanyComponent;
  let fixture: ComponentFixture<UserRowComponentVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRowComponentVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRowComponentVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

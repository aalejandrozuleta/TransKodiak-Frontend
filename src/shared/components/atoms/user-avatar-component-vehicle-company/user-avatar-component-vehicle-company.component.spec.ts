import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarComponentVehicleCompanyComponent } from './user-avatar-component-vehicle-company.component';

describe('UserAvatarComponentVehicleCompanyComponent', () => {
  let component: UserAvatarComponentVehicleCompanyComponent;
  let fixture: ComponentFixture<UserAvatarComponentVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAvatarComponentVehicleCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      UserAvatarComponentVehicleCompanyComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

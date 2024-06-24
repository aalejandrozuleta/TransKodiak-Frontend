import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWelcomeVehicleCompanyComponent } from './group-welcome-vehicle-company.component';

describe('GroupWelcomeVehicleCompanyComponent', () => {
  let component: GroupWelcomeVehicleCompanyComponent;
  let fixture: ComponentFixture<GroupWelcomeVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupWelcomeVehicleCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWelcomeVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

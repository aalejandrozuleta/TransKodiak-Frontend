import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTableUserVehicleCompanyComponent } from './group-table-user-vehicle-company.component';

describe('GroupTableUserVehicleCompanyComponent', () => {
  let component: GroupTableUserVehicleCompanyComponent;
  let fixture: ComponentFixture<GroupTableUserVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupTableUserVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupTableUserVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

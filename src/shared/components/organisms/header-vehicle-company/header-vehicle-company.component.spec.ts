import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVehicleCompanyComponent } from './header-vehicle-company.component';

describe('HeaderVehicleCompanyComponent', () => {
  let component: HeaderVehicleCompanyComponent;
  let fixture: ComponentFixture<HeaderVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

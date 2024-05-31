import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCompanyPanelComponent } from './vehicle-company-panel.component';

describe('VehicleCompanyPanelComponent', () => {
  let component: VehicleCompanyPanelComponent;
  let fixture: ComponentFixture<VehicleCompanyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCompanyPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleCompanyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

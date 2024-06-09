import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteHeaderFormVehicleComponent } from './complete-header-form-vehicle.component';

describe('CompleteHeaderFormVehicleComponent', () => {
  let component: CompleteHeaderFormVehicleComponent;
  let fixture: ComponentFixture<CompleteHeaderFormVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteHeaderFormVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteHeaderFormVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

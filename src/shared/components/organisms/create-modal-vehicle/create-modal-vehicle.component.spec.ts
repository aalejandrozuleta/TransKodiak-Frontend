import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalVehicleComponent } from './create-modal-vehicle.component';

describe('CreateModalVehicleComponent', () => {
  let component: CreateModalVehicleComponent;
  let fixture: ComponentFixture<CreateModalVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModalVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateModalVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

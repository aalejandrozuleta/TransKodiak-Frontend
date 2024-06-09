import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleModalVehicleCompanyComponent } from './tittle-modal-vehicle-company.component';

describe('TittleModalVehicleCompanyComponent', () => {
  let component: TittleModalVehicleCompanyComponent;
  let fixture: ComponentFixture<TittleModalVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TittleModalVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TittleModalVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

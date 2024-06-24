import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationUserNavVehicleComponent } from './information-user-nav-vehicle.component';

describe('InformationUserNavVehicleComponent', () => {
  let component: InformationUserNavVehicleComponent;
  let fixture: ComponentFixture<InformationUserNavVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationUserNavVehicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationUserNavVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

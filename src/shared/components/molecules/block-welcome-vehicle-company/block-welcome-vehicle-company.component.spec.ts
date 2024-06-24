import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockWelcomeVehicleCompanyComponent } from './block-welcome-vehicle-company.component';

describe('BlockWelcomeVehicleCompanyComponent', () => {
  let component: BlockWelcomeVehicleCompanyComponent;
  let fixture: ComponentFixture<BlockWelcomeVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockWelcomeVehicleCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockWelcomeVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

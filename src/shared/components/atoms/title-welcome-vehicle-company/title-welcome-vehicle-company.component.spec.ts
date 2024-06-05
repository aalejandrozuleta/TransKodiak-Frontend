import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWelcomeVehicleCompanyComponent } from './title-welcome-vehicle-company.component';

describe('TitleWelcomeVehicleCompanyComponent', () => {
  let component: TitleWelcomeVehicleCompanyComponent;
  let fixture: ComponentFixture<TitleWelcomeVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleWelcomeVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleWelcomeVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

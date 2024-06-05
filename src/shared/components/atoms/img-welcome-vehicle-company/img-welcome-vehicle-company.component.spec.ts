import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWelcomeVehicleCompanyComponent } from './img-welcome-vehicle-company.component';

describe('ImgWelcomeVehicleCompanyComponent', () => {
  let component: ImgWelcomeVehicleCompanyComponent;
  let fixture: ComponentFixture<ImgWelcomeVehicleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgWelcomeVehicleCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgWelcomeVehicleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

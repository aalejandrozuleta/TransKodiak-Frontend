import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFormRegisterCompanyComponent } from './button-form-register-company.component';

describe('ButtonFormRegisterCompanyComponent', () => {
  let component: ButtonFormRegisterCompanyComponent;
  let fixture: ComponentFixture<ButtonFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

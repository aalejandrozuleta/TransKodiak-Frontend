import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFormRegisterCompanyComponent } from './buttons-form-register-company.component';

describe('ButtonsFormRegisterCompanyComponent', () => {
  let component: ButtonsFormRegisterCompanyComponent;
  let fixture: ComponentFixture<ButtonsFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

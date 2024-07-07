import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsFormRegisterCompanyComponent } from './inputs-form-register-company.component';

describe('InputsFormRegisterCompanyComponent', () => {
  let component: InputsFormRegisterCompanyComponent;
  let fixture: ComponentFixture<InputsFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

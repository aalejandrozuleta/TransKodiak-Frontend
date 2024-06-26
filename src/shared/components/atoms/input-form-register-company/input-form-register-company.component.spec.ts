import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormRegisterCompanyComponent } from './input-form-register-company.component';

describe('InputFormRegisterCompanyComponent', () => {
  let component: InputFormRegisterCompanyComponent;
  let fixture: ComponentFixture<InputFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

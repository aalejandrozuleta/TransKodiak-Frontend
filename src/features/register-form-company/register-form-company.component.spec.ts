import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormCompanyComponent } from './register-form-company.component';

describe('RegisterFormCompanyComponent', () => {
  let component: RegisterFormCompanyComponent;
  let fixture: ComponentFixture<RegisterFormCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

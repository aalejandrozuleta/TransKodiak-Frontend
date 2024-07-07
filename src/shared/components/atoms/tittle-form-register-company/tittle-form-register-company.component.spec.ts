import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleFormRegisterCompanyComponent } from './tittle-form-register-company.component';

describe('TittleFormRegisterCompanyComponent', () => {
  let component: TittleFormRegisterCompanyComponent;
  let fixture: ComponentFixture<TittleFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TittleFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TittleFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

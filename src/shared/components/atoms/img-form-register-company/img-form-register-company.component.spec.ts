import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFormRegisterCompanyComponent } from './img-form-register-company.component';

describe('ImgFormRegisterCompanyComponent', () => {
  let component: ImgFormRegisterCompanyComponent;
  let fixture: ComponentFixture<ImgFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

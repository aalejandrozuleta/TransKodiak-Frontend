import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormRegisterCompanyComponent } from './text-form-register-company.component';

describe('TextFormRegisterCompanyComponent', () => {
  let component: TextFormRegisterCompanyComponent;
  let fixture: ComponentFixture<TextFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

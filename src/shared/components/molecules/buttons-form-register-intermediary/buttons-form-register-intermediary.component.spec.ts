import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFormRegisterIntermediaryComponent } from './buttons-form-register-intermediary.component';

describe('ButtonsFormRegisterIntermediaryComponent', () => {
  let component: ButtonsFormRegisterIntermediaryComponent;
  let fixture: ComponentFixture<ButtonsFormRegisterIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsFormRegisterIntermediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsFormRegisterIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

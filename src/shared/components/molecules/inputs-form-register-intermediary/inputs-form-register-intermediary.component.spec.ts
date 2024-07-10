import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsFormRegisterIntermediaryComponent } from './inputs-form-register-intermediary.component';

describe('InputsFormRegisterIntermediaryComponent', () => {
  let component: InputsFormRegisterIntermediaryComponent;
  let fixture: ComponentFixture<InputsFormRegisterIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsFormRegisterIntermediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsFormRegisterIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

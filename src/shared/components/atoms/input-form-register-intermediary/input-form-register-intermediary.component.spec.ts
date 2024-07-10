import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormRegisterIntermediaryComponent } from './input-form-register-intermediary.component';

describe('InputFormRegisterIntermediaryComponent', () => {
  let component: InputFormRegisterIntermediaryComponent;
  let fixture: ComponentFixture<InputFormRegisterIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFormRegisterIntermediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormRegisterIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRecoveryPasswordComponent } from './input-recovery-password.component';

describe('InputRecoveryPasswordComponent', () => {
  let component: InputRecoveryPasswordComponent;
  let fixture: ComponentFixture<InputRecoveryPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRecoveryPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRecoveryPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

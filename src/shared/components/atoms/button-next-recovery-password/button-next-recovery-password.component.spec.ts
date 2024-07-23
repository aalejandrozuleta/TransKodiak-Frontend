import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNextRecoveryPasswordComponent } from './button-next-recovery-password.component';

describe('ButtonNextRecoveryPasswordComponent', () => {
  let component: ButtonNextRecoveryPasswordComponent;
  let fixture: ComponentFixture<ButtonNextRecoveryPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNextRecoveryPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNextRecoveryPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

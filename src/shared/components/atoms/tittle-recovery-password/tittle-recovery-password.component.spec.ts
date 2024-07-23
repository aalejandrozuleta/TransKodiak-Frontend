import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleRecoveryPasswordComponent } from './tittle-recovery-password.component';

describe('TittleRecoveryPasswordComponent', () => {
  let component: TittleRecoveryPasswordComponent;
  let fixture: ComponentFixture<TittleRecoveryPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TittleRecoveryPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TittleRecoveryPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

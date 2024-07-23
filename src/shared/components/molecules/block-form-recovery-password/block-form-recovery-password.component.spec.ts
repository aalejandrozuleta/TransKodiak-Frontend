import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFormRecoveryPasswordComponent } from './block-form-recovery-password.component';

describe('BlockFormRecoveryPasswordComponent', () => {
  let component: BlockFormRecoveryPasswordComponent;
  let fixture: ComponentFixture<BlockFormRecoveryPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockFormRecoveryPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFormRecoveryPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

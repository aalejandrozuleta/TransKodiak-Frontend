import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCloseBlockModalConfirmComponent } from './button-close-block-modal-confirm.component';

describe('ButtonCloseBlockModalConfirmComponent', () => {
  let component: ButtonCloseBlockModalConfirmComponent;
  let fixture: ComponentFixture<ButtonCloseBlockModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCloseBlockModalConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCloseBlockModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

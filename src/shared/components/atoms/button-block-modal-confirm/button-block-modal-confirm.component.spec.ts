import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBlockModalConfirmComponent } from './button-block-modal-confirm.component';

describe('ButtonBlockModalConfirmComponent', () => {
  let component: ButtonBlockModalConfirmComponent;
  let fixture: ComponentFixture<ButtonBlockModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBlockModalConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonBlockModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

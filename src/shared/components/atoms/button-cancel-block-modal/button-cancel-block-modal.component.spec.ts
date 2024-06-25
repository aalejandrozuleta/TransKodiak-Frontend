import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCancelBlockModalComponent } from './button-cancel-block-modal.component';

describe('ButtonCancelBlockModalComponent', () => {
  let component: ButtonCancelBlockModalComponent;
  let fixture: ComponentFixture<ButtonCancelBlockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCancelBlockModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCancelBlockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

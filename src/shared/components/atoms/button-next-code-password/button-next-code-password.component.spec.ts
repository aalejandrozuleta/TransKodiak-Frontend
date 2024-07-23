import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNextCodePasswordComponent } from './button-next-code-password.component';

describe('ButtonNextCodePasswordComponent', () => {
  let component: ButtonNextCodePasswordComponent;
  let fixture: ComponentFixture<ButtonNextCodePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNextCodePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNextCodePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

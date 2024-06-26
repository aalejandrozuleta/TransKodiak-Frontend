import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionForgetPasswordSignInComponent } from './option-forget-password-sign-in.component';

describe('OptionForgetPasswordSignInComponent', () => {
  let component: OptionForgetPasswordSignInComponent;
  let fixture: ComponentFixture<OptionForgetPasswordSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionForgetPasswordSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionForgetPasswordSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

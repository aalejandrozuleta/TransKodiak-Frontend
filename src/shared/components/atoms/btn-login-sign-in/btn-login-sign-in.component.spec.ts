import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoginSignInComponent } from './btn-login-sign-in.component';

describe('BtnLoginSignInComponent', () => {
  let component: BtnLoginSignInComponent;
  let fixture: ComponentFixture<BtnLoginSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLoginSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnLoginSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

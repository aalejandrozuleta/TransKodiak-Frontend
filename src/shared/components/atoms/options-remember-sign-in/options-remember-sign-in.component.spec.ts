import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsRememberSignInComponent } from './options-remember-sign-in.component';

describe('OptionsRememberSignInComponent', () => {
  let component: OptionsRememberSignInComponent;
  let fixture: ComponentFixture<OptionsRememberSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsRememberSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsRememberSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

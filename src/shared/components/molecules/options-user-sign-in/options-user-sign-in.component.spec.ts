import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsUserSignInComponent } from './options-user-sign-in.component';

describe('OptionsUserSignInComponent', () => {
  let component: OptionsUserSignInComponent;
  let fixture: ComponentFixture<OptionsUserSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsUserSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsUserSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

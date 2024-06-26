import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsNavSignInComponent } from './options-nav-sign-in.component';

describe('OptionsNavSignInComponent', () => {
  let component: OptionsNavSignInComponent;
  let fixture: ComponentFixture<OptionsNavSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsNavSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsNavSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

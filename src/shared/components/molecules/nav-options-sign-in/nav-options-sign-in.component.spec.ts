import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOptionsSignInComponent } from './nav-options-sign-in.component';

describe('NavOptionsSignInComponent', () => {
  let component: NavOptionsSignInComponent;
  let fixture: ComponentFixture<NavOptionsSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOptionsSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavOptionsSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

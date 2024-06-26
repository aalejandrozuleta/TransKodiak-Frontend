import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsBlockSignInComponent } from './inputs-block-sign-in.component';

describe('InputsBlockSignInComponent', () => {
  let component: InputsBlockSignInComponent;
  let fixture: ComponentFixture<InputsBlockSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsBlockSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputsBlockSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

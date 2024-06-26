import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFormSignInComponent } from './img-form-sign-in.component';

describe('ImgFormSignInComponent', () => {
  let component: ImgFormSignInComponent;
  let fixture: ComponentFixture<ImgFormSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgFormSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgFormSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

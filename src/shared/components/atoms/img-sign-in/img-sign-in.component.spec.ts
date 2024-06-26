import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSignInComponent } from './img-sign-in.component';

describe('ImgSignInComponent', () => {
  let component: ImgSignInComponent;
  let fixture: ComponentFixture<ImgSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

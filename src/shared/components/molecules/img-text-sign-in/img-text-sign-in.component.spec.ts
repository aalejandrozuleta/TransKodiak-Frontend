import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextSignInComponent } from './img-text-sign-in.component';

describe('ImgTextSignInComponent', () => {
  let component: ImgTextSignInComponent;
  let fixture: ComponentFixture<ImgTextSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgTextSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgTextSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

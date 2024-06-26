import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImgSignInComponent } from './text-img-sign-in.component';

describe('TextImgSignInComponent', () => {
  let component: TextImgSignInComponent;
  let fixture: ComponentFixture<TextImgSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImgSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextImgSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSignInComponent } from './title-sign-in.component';

describe('TitleSignInComponent', () => {
  let component: TitleSignInComponent;
  let fixture: ComponentFixture<TitleSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

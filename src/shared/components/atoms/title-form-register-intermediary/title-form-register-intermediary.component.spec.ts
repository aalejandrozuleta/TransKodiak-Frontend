import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFormRegisterIntermediaryComponent } from './title-form-register-intermediary.component';

describe('TitleFormRegisterIntermediaryComponent', () => {
  let component: TitleFormRegisterIntermediaryComponent;
  let fixture: ComponentFixture<TitleFormRegisterIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleFormRegisterIntermediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFormRegisterIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

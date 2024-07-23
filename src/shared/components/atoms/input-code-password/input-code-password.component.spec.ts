import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodePasswordComponent } from './input-code-password.component';

describe('InputCodePasswordComponent', () => {
  let component: InputCodePasswordComponent;
  let fixture: ComponentFixture<InputCodePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCodePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCodePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

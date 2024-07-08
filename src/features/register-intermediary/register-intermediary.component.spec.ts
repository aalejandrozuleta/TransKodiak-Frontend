import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIntermediaryComponent } from './register-intermediary.component';

describe('RegisterIntermediaryComponent', () => {
  let component: RegisterIntermediaryComponent;
  let fixture: ComponentFixture<RegisterIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterIntermediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

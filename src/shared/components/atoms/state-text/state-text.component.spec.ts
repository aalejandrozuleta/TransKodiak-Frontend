import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTextComponent } from './state-text.component';

describe('StateTextComponent', () => {
  let component: StateTextComponent;
  let fixture: ComponentFixture<StateTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

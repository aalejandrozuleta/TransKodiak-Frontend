import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSegundaryTextComponent } from './state-segundary-text.component';

describe('StateSegundaryTextComponent', () => {
  let component: StateSegundaryTextComponent;
  let fixture: ComponentFixture<StateSegundaryTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateSegundaryTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StateSegundaryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

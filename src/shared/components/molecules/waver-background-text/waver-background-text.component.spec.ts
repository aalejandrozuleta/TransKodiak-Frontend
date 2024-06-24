import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaverBackgroundTextComponent } from './waver-background-text.component';

describe('WaverBackgroundTextComponent', () => {
  let component: WaverBackgroundTextComponent;
  let fixture: ComponentFixture<WaverBackgroundTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaverBackgroundTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaverBackgroundTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

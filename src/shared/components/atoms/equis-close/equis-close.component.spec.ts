import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquisCloseComponent } from './equis-close.component';

describe('EquisCloseComponent', () => {
  let component: EquisCloseComponent;
  let fixture: ComponentFixture<EquisCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquisCloseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquisCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsNotificationComponent } from './options-notification.component';

describe('OptionsNotificationComponent', () => {
  let component: OptionsNotificationComponent;
  let fixture: ComponentFixture<OptionsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUserNotificationComponent } from './name-user-notification.component';

describe('NameUserNotificationComponent', () => {
  let component: NameUserNotificationComponent;
  let fixture: ComponentFixture<NameUserNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameUserNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NameUserNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

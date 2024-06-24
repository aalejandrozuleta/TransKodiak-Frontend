import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgNotificationComponent } from './img-notification.component';

describe('ImgNotificationComponent', () => {
  let component: ImgNotificationComponent;
  let fixture: ComponentFixture<ImgNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

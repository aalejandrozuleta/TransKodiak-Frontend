import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTravelNotificationComponent } from './type-travel-notification.component';

describe('TypeTravelNotificationComponent', () => {
  let component: TypeTravelNotificationComponent;
  let fixture: ComponentFixture<TypeTravelNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeTravelNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeTravelNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

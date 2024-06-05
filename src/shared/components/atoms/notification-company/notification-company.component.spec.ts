import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCompanyComponent } from './notification-company.component';

describe('NotificationCompanyComponent', () => {
  let component: NotificationCompanyComponent;
  let fixture: ComponentFixture<NotificationCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

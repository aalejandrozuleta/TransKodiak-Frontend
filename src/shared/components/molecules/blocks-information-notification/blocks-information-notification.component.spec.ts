import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksInformationNotificationComponent } from './blocks-information-notification.component';

describe('BlocksInformationNotificationComponent', () => {
  let component: BlocksInformationNotificationComponent;
  let fixture: ComponentFixture<BlocksInformationNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksInformationNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocksInformationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

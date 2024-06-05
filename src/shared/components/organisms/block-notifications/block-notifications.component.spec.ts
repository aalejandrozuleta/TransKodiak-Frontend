import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNotificationsComponent } from './block-notifications.component';

describe('BlockNotificationsComponent', () => {
  let component: BlockNotificationsComponent;
  let fixture: ComponentFixture<BlockNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

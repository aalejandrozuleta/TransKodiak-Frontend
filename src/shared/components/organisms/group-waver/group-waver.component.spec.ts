import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWaverComponent } from './group-waver.component';

describe('GroupWaverComponent', () => {
  let component: GroupWaverComponent;
  let fixture: ComponentFixture<GroupWaverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupWaverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupWaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

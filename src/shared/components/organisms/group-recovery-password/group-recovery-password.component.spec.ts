import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRecoveryPasswordComponent } from './group-recovery-password.component';

describe('GroupRecoveryPasswordComponent', () => {
  let component: GroupRecoveryPasswordComponent;
  let fixture: ComponentFixture<GroupRecoveryPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupRecoveryPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupRecoveryPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

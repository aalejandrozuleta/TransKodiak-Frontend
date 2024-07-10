import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormRegisterInetrmediaryComponent } from './group-form-register-inetrmediary.component';

describe('GroupFormRegisterInetrmediaryComponent', () => {
  let component: GroupFormRegisterInetrmediaryComponent;
  let fixture: ComponentFixture<GroupFormRegisterInetrmediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFormRegisterInetrmediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFormRegisterInetrmediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

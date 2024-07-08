import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormRegisterIntermediaryComponent } from './group-form-register-intermediary.component';

describe('GroupFormRegisterIntermediaryComponent', () => {
  let component: GroupFormRegisterIntermediaryComponent;
  let fixture: ComponentFixture<GroupFormRegisterIntermediaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFormRegisterIntermediaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFormRegisterIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

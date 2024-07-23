import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCodePasswordComponent } from './group-code-password.component';

describe('GroupCodePasswordComponent', () => {
  let component: GroupCodePasswordComponent;
  let fixture: ComponentFixture<GroupCodePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCodePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCodePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

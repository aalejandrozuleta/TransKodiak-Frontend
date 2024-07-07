import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormRegisterCompanyComponent } from './group-form-register-company.component';

describe('GroupFormRegisterCompanyComponent', () => {
  let component: GroupFormRegisterCompanyComponent;
  let fixture: ComponentFixture<GroupFormRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFormRegisterCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFormRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

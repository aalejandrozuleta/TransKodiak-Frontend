import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetingsCompanyComponent } from './user-setings-company.component';

describe('UserSetingsCompanyComponent', () => {
  let component: UserSetingsCompanyComponent;
  let fixture: ComponentFixture<UserSetingsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSetingsCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSetingsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

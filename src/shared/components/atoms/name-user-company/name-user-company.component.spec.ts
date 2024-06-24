import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUserCompanyComponent } from './name-user-company.component';

describe('NameUserCompanyComponent', () => {
  let component: NameUserCompanyComponent;
  let fixture: ComponentFixture<NameUserCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameUserCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NameUserCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCompanyComponent } from './logo-company.component';

describe('LogoCompanyComponent', () => {
  let component: LogoCompanyComponent;
  let fixture: ComponentFixture<LogoCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

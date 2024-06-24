import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupaSearchNavCompanyComponent } from './lupa-search-nav-company.component';

describe('LupaSearchNavCompanyComponent', () => {
  let component: LupaSearchNavCompanyComponent;
  let fixture: ComponentFixture<LupaSearchNavCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LupaSearchNavCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LupaSearchNavCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

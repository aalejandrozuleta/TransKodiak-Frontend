import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediaryCompanyComponent } from './intermediary-company.component';

describe('IntermediaryCompanyComponent', () => {
  let component: IntermediaryCompanyComponent;
  let fixture: ComponentFixture<IntermediaryCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediaryCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediaryCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

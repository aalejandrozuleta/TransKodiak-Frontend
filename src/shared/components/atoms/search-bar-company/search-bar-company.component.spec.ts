import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCompanyComponent } from './search-bar-company.component';

describe('SearchBarCompanyComponent', () => {
  let component: SearchBarCompanyComponent;
  let fixture: ComponentFixture<SearchBarCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBarCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

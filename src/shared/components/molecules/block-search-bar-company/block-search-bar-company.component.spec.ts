import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSearchBarCompanyComponent } from './block-search-bar-company.component';

describe('BlockSearchBarCompanyComponent', () => {
  let component: BlockSearchBarCompanyComponent;
  let fixture: ComponentFixture<BlockSearchBarCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSearchBarCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockSearchBarCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

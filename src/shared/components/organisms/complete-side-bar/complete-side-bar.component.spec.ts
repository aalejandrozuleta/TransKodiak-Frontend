import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSideBarComponent } from './complete-side-bar.component';

describe('CompleteSideBarComponent', () => {
  let component: CompleteSideBarComponent;
  let fixture: ComponentFixture<CompleteSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

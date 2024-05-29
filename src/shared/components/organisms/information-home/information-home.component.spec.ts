import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationHomeComponent } from './information-home.component';

describe('InformationHomeComponent', () => {
  let component: InformationHomeComponent;
  let fixture: ComponentFixture<InformationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

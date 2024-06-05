import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUserCompanyComponent } from './image-user-company.component';

describe('ImageUserCompanyComponent', () => {
  let component: ImageUserCompanyComponent;
  let fixture: ComponentFixture<ImageUserCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUserCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageUserCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

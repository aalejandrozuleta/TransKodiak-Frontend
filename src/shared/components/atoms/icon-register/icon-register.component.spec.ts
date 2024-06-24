import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRegisterComponent } from './icon-register.component';

describe('IconRegisterComponent', () => {
  let component: IconRegisterComponent;
  let fixture: ComponentFixture<IconRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

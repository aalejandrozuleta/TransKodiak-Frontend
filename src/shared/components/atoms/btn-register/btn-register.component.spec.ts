import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRegisterComponent } from './btn-register.component';

describe('BtnRegisterComponent', () => {
  let component: BtnRegisterComponent;
  let fixture: ComponentFixture<BtnRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

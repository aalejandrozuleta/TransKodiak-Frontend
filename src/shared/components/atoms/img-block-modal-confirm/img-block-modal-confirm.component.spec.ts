import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBlockModalConfirmComponent } from './img-block-modal-confirm.component';

describe('ImgBlockModalConfirmComponent', () => {
  let component: ImgBlockModalConfirmComponent;
  let fixture: ComponentFixture<ImgBlockModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgBlockModalConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgBlockModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

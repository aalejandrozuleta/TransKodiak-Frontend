import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockModalConfirmComponent } from './text-block-modal-confirm.component';

describe('TextBlockModalConfirmComponent', () => {
  let component: TextBlockModalConfirmComponent;
  let fixture: ComponentFixture<TextBlockModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBlockModalConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextBlockModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

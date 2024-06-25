import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockModalConfirmComponent } from './block-modal-confirm.component';

describe('BlockModalConfirmComponent', () => {
  let component: BlockModalConfirmComponent;
  let fixture: ComponentFixture<BlockModalConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockModalConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

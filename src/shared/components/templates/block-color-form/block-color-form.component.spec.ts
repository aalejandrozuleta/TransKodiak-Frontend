import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockColorFormComponent } from './block-color-form.component';

describe('BlockColorFormComponent', () => {
  let component: BlockColorFormComponent;
  let fixture: ComponentFixture<BlockColorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockColorFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

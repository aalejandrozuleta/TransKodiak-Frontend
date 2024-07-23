import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFormCodePasswordComponent } from './block-form-code-password.component';

describe('BlockFormCodePasswordComponent', () => {
  let component: BlockFormCodePasswordComponent;
  let fixture: ComponentFixture<BlockFormCodePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockFormCodePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFormCodePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksColorSignInComponent } from './blocks-color-sign-in.component';

describe('BlocksColorSignInComponent', () => {
  let component: BlocksColorSignInComponent;
  let fixture: ComponentFixture<BlocksColorSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksColorSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocksColorSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

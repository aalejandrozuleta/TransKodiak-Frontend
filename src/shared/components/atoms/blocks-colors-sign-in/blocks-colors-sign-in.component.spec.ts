import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksColorsSignInComponent } from './blocks-colors-sign-in.component';

describe('BlocksColorsSignInComponent', () => {
  let component: BlocksColorsSignInComponent;
  let fixture: ComponentFixture<BlocksColorsSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksColorsSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocksColorsSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

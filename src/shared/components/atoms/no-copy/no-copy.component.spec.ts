import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCopyComponent } from './no-copy.component';

describe('NoCopyComponent', () => {
  let component: NoCopyComponent;
  let fixture: ComponentFixture<NoCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoCopyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

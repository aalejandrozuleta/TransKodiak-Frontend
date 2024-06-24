import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaverImageComponent } from './waver-image.component';

describe('WaverImageComponent', () => {
  let component: WaverImageComponent;
  let fixture: ComponentFixture<WaverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaverImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

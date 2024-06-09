import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleCreateComponent } from './subtitle-create.component';

describe('SubtitleCreateComponent', () => {
  let component: SubtitleCreateComponent;
  let fixture: ComponentFixture<SubtitleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtitleCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtitleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

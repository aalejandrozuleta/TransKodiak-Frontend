import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardsHomeComponent } from './text-cards-home.component';

describe('TextCardsHomeComponent', () => {
  let component: TextCardsHomeComponent;
  let fixture: ComponentFixture<TextCardsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCardsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextCardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

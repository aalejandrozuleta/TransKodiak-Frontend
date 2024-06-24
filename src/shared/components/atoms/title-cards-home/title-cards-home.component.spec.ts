import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCardsHomeComponent } from './title-cards-home.component';

describe('TitleCardsHomeComponent', () => {
  let component: TitleCardsHomeComponent;
  let fixture: ComponentFixture<TitleCardsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCardsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleCardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

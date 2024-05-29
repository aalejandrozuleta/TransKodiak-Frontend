import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBlockHomeComponent } from './cards-block-home.component';

describe('CardsBlockHomeComponent', () => {
  let component: CardsBlockHomeComponent;
  let fixture: ComponentFixture<CardsBlockHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBlockHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsBlockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

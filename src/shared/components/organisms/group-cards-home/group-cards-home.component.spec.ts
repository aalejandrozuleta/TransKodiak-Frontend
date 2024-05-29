import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardsHomeComponent } from './group-cards-home.component';

describe('GroupCardsHomeComponent', () => {
  let component: GroupCardsHomeComponent;
  let fixture: ComponentFixture<GroupCardsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCardsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImglupastateComponent } from './imglupastate.component';

describe('ImglupastateComponent', () => {
  let component: ImglupastateComponent;
  let fixture: ComponentFixture<ImglupastateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImglupastateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImglupastateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

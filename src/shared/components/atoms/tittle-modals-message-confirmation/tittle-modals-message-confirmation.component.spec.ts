import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleModalsMessageConfirmationComponent } from './tittle-modals-message-confirmation.component';

describe('TittleModalsMessageConfirmationComponent', () => {
  let component: TittleModalsMessageConfirmationComponent;
  let fixture: ComponentFixture<TittleModalsMessageConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TittleModalsMessageConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TittleModalsMessageConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

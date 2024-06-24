import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundArrowBackUserPerfilComponent } from './background-arrow-back-user-perfil.component';

describe('BackgroundArrowBackUserPerfilComponent', () => {
  let component: BackgroundArrowBackUserPerfilComponent;
  let fixture: ComponentFixture<BackgroundArrowBackUserPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundArrowBackUserPerfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundArrowBackUserPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowBackUserPerfilComponent } from './row-back-user-perfil.component';

describe('RowBackUserPerfilComponent', () => {
  let component: RowBackUserPerfilComponent;
  let fixture: ComponentFixture<RowBackUserPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowBackUserPerfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RowBackUserPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

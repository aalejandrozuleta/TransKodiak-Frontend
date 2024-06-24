import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPerfilUserPerfilComponent } from './options-perfil-user-perfil.component';

describe('OptionsPerfilUserPerfilComponent', () => {
  let component: OptionsPerfilUserPerfilComponent;
  let fixture: ComponentFixture<OptionsPerfilUserPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsPerfilUserPerfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsPerfilUserPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

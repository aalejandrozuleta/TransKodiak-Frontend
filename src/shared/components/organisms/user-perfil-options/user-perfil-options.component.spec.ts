import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerfilOptionsComponent } from './user-perfil-options.component';

describe('UserPerfilOptionsComponent', () => {
  let component: UserPerfilOptionsComponent;
  let fixture: ComponentFixture<UserPerfilOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPerfilOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPerfilOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

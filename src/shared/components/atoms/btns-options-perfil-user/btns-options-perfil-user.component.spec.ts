import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsOptionsPerfilUserComponent } from './btns-options-perfil-user.component';

describe('BtnsOptionsPerfilUserComponent', () => {
  let component: BtnsOptionsPerfilUserComponent;
  let fixture: ComponentFixture<BtnsOptionsPerfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnsOptionsPerfilUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnsOptionsPerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

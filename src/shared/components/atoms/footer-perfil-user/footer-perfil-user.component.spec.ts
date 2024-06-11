import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPerfilUserComponent } from './footer-perfil-user.component';

describe('FooterPerfilUserComponent', () => {
  let component: FooterPerfilUserComponent;
  let fixture: ComponentFixture<FooterPerfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPerfilUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

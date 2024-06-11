import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePerfilUserComponent } from './name-perfil-user.component';

describe('NamePerfilUserComponent', () => {
  let component: NamePerfilUserComponent;
  let fixture: ComponentFixture<NamePerfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamePerfilUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamePerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

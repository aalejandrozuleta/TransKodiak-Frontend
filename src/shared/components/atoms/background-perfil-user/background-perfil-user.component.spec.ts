import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundPerfilUserComponent } from './background-perfil-user.component';

describe('BackgroundPerfilUserComponent', () => {
  let component: BackgroundPerfilUserComponent;
  let fixture: ComponentFixture<BackgroundPerfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundPerfilUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundPerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

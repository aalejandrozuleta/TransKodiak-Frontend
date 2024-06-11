import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePerfilUserComponent } from './image-perfil-user.component';

describe('ImagePerfilUserComponent', () => {
  let component: ImagePerfilUserComponent;
  let fixture: ComponentFixture<ImagePerfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePerfilUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagePerfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

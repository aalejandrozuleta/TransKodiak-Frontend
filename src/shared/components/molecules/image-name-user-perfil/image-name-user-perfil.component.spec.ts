import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNameUserPerfilComponent } from './image-name-user-perfil.component';

describe('ImageNameUserPerfilComponent', () => {
  let component: ImageNameUserPerfilComponent;
  let fixture: ComponentFixture<ImageNameUserPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageNameUserPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageNameUserPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

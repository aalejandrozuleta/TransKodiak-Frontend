import { Component } from '@angular/core';
import { ImagePerfilUserComponent } from '@atoms/image-perfil-user/image-perfil-user.component';
import { NamePerfilUserComponent } from '@atoms/name-perfil-user/name-perfil-user.component';

@Component({
  selector: 'app-image-name-user-perfil',
  standalone: true,
  imports: [NamePerfilUserComponent, ImagePerfilUserComponent],
  templateUrl: './image-name-user-perfil.component.html',
  styleUrl: './image-name-user-perfil.component.scss',
})
export class ImageNameUserPerfilComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterPerfilUserComponent } from '@atoms/footer-perfil-user/footer-perfil-user.component';
import { BackgroundArrowBackUserPerfilComponent } from '@molecules/background-arrow-back-user-perfil/background-arrow-back-user-perfil.component';
import { ImageNameUserPerfilComponent } from '@molecules/image-name-user-perfil/image-name-user-perfil.component';
import { OptionsPerfilUserPerfilComponent } from '@molecules/options-perfil-user-perfil/options-perfil-user-perfil.component';
import { UserOptionsPerfilService } from '@services/user-options-perfil.service';

@Component({
  selector: 'app-user-perfil-options',
  standalone: true,
  imports: [
    ImageNameUserPerfilComponent,
    OptionsPerfilUserPerfilComponent,
    FooterPerfilUserComponent,
    BackgroundArrowBackUserPerfilComponent,
    CommonModule
  ],
  templateUrl: './user-perfil-options.component.html',
  styleUrl: './user-perfil-options.component.scss',
})
export class UserPerfilOptionsComponent {
  imgBack: string = '../../../../assets/imagenes/cerrarModal.png';
  constructor(private UserOptionsPerfilService: UserOptionsPerfilService) {}

  closeModal() {
    this.UserOptionsPerfilService.closeModal();
  }
}

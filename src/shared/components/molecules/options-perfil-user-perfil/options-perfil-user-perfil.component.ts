import { optionsMenu } from '@models/optionsMenu';
import { Component } from '@angular/core';
import { BtnsOptionsPerfilUserComponent } from '@atoms/btns-options-perfil-user/btns-options-perfil-user.component';
import { CommonModule } from '@angular/common';
import { UserOptionsPerfilService } from '@services/user-options-perfil.service';

@Component({
  selector: 'app-options-perfil-user-perfil',
  standalone: true,
  imports: [CommonModule, BtnsOptionsPerfilUserComponent],
  templateUrl: './options-perfil-user-perfil.component.html',
  styleUrl: './options-perfil-user-perfil.component.scss',
})
export class OptionsPerfilUserPerfilComponent {
  constructor(private userOptionsPerfilService: UserOptionsPerfilService) {}

  optionsMenu: optionsMenu[] = [
    {
      imgOptions: '../../../../assets/icons/pencil.png',
      nameAction: 'Editar Perfil',
      imgArrow: '../../../../assets/icons/bxs-chevron-right.svg',
      className: 'blockOptions',
      action: () => this.userOptionsPerfilService.editPerfil(),
    },
    {
      imgOptions: '../../../../assets/icons/lock.png',
      nameAction: 'Cambio contraseña',
      imgArrow: '../../../../assets/icons/bxs-chevron-right.svg',
      className: 'blockOptions',
      action: () => this.userOptionsPerfilService.changePasswords(),
    },
    {
      imgOptions: '../../../../assets/icons/email.png',
      nameAction: 'Correo',
      imgArrow: '../../../../assets/icons/bxs-right-arrow-alt.svg',
      className: 'blockOptions',
      action: () => this.userOptionsPerfilService.emailUser(),
    },
    {
      imgOptions: '../../../../assets/icons/closeDoor.png',
      nameAction: 'cerrar sesión',
      imgArrow: '../../../../assets/icons/bxs-right-arrow-alt.svg',
      className: 'blockOptions',
      action: () => this.userOptionsPerfilService.closeUser(),
    },
    {
      imgOptions: '../../../../assets/icons/NanUser.png',
      nameAction: 'deshabilitar cuenta',
      imgArrow: '../../../../assets/icons/rowRed.png',
      className: 'blockOptions btnDisable',
      action: () => this.userOptionsPerfilService.disableUser(),
    },
  ];
}

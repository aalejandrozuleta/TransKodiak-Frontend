import { Component } from '@angular/core';
import { UserOptionsPerfilService } from '@services/user-options-perfil.service';

@Component({
  selector: 'app-row-back-user-perfil',
  standalone: true,
  imports: [],
  templateUrl: './row-back-user-perfil.component.html',
  styleUrl: './row-back-user-perfil.component.scss',
})
export class RowBackUserPerfilComponent {
  imgBack: string = '../../../../assets/icons/bx-left-arrow-alt.svg';
  constructor(private UserOptionsPerfilService: UserOptionsPerfilService) {}

  closeModal() {
    this.UserOptionsPerfilService.closeModal();
  }
}

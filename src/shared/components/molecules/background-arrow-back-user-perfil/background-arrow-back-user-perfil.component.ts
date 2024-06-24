import { Component } from '@angular/core';
import { BackgroundPerfilUserComponent } from '@atoms/background-perfil-user/background-perfil-user.component';
import { RowBackUserPerfilComponent } from '@atoms/row-back-user-perfil/row-back-user-perfil.component';

@Component({
  selector: 'app-background-arrow-back-user-perfil',
  standalone: true,
  imports: [BackgroundPerfilUserComponent, RowBackUserPerfilComponent],
  templateUrl: './background-arrow-back-user-perfil.component.html',
  styleUrl: './background-arrow-back-user-perfil.component.scss',
})
export class BackgroundArrowBackUserPerfilComponent {}

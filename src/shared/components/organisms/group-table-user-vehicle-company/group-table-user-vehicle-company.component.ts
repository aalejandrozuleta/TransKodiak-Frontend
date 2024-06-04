import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserRowComponentVehicleCompanyComponent } from '@molecules/user-row-component-vehicle-company/user-row-component-vehicle-company.component';

@Component({
  selector: 'app-group-table-user-vehicle-company',
  standalone: true,
  imports: [
    UserRowComponentVehicleCompanyComponent,
    CommonModule
  ],
  templateUrl: './group-table-user-vehicle-company.component.html',
  styleUrls: ['./group-table-user-vehicle-company.component.scss']
})
export class GroupTableUserVehicleCompanyComponent {
  users = [
   {
      checked: false,
      Src: 'ruta/a/tu/avatar.png',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 1
    },
    {
      checked: false,
      avatarSrc: 'ruta/a/tu/avatar.png',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 1
    },
    {
      checked: false,
      avatarSrc: 'ruta/a/tu/avatar.png',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 1
    },
    {
      checked: false,
      avatarSrc: 'src/assets/imagenes/empresario.png',
      name: 'Sofia',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 1
    },
    // ...otros usuarios
  ];
}
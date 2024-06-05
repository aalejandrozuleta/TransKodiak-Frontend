import { userTableVehicle } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckComponentVehicleCompanyComponent } from '@atoms/check-component-vehicle-company/check-component-vehicle-company.component';
import { UserRowComponentVehicleCompanyComponent } from '@molecules/user-row-component-vehicle-company/user-row-component-vehicle-company.component';


@Component({
  selector: 'app-group-table-user-vehicle-company',
  standalone: true,
  imports: [
    UserRowComponentVehicleCompanyComponent,
    CommonModule,
    CheckComponentVehicleCompanyComponent
  ],
  templateUrl: './group-table-user-vehicle-company.component.html',
  styleUrls: ['./group-table-user-vehicle-company.component.scss']
})
export class GroupTableUserVehicleCompanyComponent {
  users:userTableVehicle[] = [
   {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 2,
      placa: 'safasfsafaf',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 1,
      placa: 'safasfsafaf',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Nombre del usuario',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 3,
      placa: 'safasfsafaf',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Sofia',
      email: 'correo@ejemplo.com',
      date: 'Fecha',
      id: 4,
      placa: 'safasfsafaf',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Catalina',
      email: 'cata@ejemplo.com',
      date: 'Fecha',
      id: 5,
      placa: 'perrppp',
      isChecked: true
    },
  ];

  handleDeleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
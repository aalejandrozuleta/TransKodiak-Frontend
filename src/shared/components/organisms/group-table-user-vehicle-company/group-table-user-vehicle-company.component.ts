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
      name: 'Wilton Cesar',
      email: 'wilinton07@ejemplo.com',
      date: '20/02/2024',
      id: 1,
      placa: 'AFK - 123',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Nicolas Mateo',
      email: 'matonico@ejemplo.com',
      date: '23/04/2024',
      id: 2,
      placa: 'AGH - 567',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Armando Casas',
      email: 'casasaaa@ejemplo.com',
      date: '25/08/2023',
      id: 3,
      placa: 'ERG - 890',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Sofia Ramirez',
      email: 'sofiaaa@ejemplo.com',
      date: '25/09/2023',
      id: 4,
      placa: 'ERG - 898',
      isChecked: true
    },
    {
      avatar: '../../../../assets/imagenes/empresario.png',
      name: 'Catalina Osorio',
      email: 'cata@ejemplo.com',
      date: '12/07/2023',
      id: 5,
      placa: 'ERG - 897',
      isChecked: true
    },
  ];

  handleDeleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
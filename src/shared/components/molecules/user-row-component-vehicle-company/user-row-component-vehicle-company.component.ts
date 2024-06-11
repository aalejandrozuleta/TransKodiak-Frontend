import { CheckComponentVehicleCompanyComponent } from 'src/shared/components/atoms/check-component-vehicle-company/check-component-vehicle-company.component';
import { userTableVehicle } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { UserAvatarComponentVehicleCompanyComponent } from '@atoms/user-avatar-component-vehicle-company/user-avatar-component-vehicle-company.component';
import { AdministrationUserVehicleCompanyService } from '@services/administration-user-vehicle-company.service';

@Component({
  selector: 'app-user-row-component-vehicle-company',
  standalone: true,
  imports: [
    CommonModule,
    UserAvatarComponentVehicleCompanyComponent,
    CheckComponentVehicleCompanyComponent,
  ],
  templateUrl: './user-row-component-vehicle-company.component.html',
  styleUrls: ['./user-row-component-vehicle-company.component.scss'],
})
export class UserRowComponentVehicleCompanyComponent {
  delete = '../../../../assets/imagenes/borrar.png';
  @Input() user!: userTableVehicle;

  constructor (private AdministrationUserVehicleCompanyService:AdministrationUserVehicleCompanyService){}

  deleteUserHandler(id: number) {
    this.AdministrationUserVehicleCompanyService.deleteUser(id);
  }
}

import { CheckComponentVehicleCompanyComponent } from 'src/shared/components/atoms/check-component-vehicle-company/check-component-vehicle-company.component';
import { User } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonDeleteVehicleCompanyComponent } from '@atoms/button-delete-vehicle-company/button-delete-vehicle-company.component';
import { UserAvatarComponentVehicleCompanyComponent } from '@atoms/user-avatar-component-vehicle-company/user-avatar-component-vehicle-company.component';

@Component({
  selector: 'app-user-row-component-vehicle-company',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDeleteVehicleCompanyComponent,
    UserAvatarComponentVehicleCompanyComponent,
    CheckComponentVehicleCompanyComponent
  ],
  templateUrl: './user-row-component-vehicle-company.component.html',
  styleUrls: ['./user-row-component-vehicle-company.component.scss'] 
})
export class UserRowComponentVehicleCompanyComponent {
  @Input() user: any;

  onDelete(id: number) {
    console.log('Eliminar usuario con id:', id);
    // Aquí puedes agregar la lógica para eliminar el usuario
  }
}

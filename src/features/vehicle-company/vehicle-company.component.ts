import { userTableVehicle } from './../../core/models/user-table-vehicle-company';
import { GroupTableUserVehicleCompanyComponent } from 'src/shared/components/organisms/group-table-user-vehicle-company/group-table-user-vehicle-company.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupWelcomeVehicleCompanyComponent} from 'src/shared/components/organisms/group-welcome-vehicle-company/group-welcome-vehicle-company.component';

@Component({
  selector: 'app-vehicle-company',
  standalone: true,
  imports: [CommonModule, 
    GroupWelcomeVehicleCompanyComponent,
    GroupTableUserVehicleCompanyComponent
    ],
  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss'
})
export class VehicleCompanyComponent {
  // @Input() users!: User[];
}



<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteSideBarComponent } from '@organisms/complete-side-bar/complete-side-bar.component';
import { NavBarVehicleCompanyComponent } from '@templates/nav-bar-vehicle-company/nav-bar-vehicle-company.component';
=======
import { userTableVehicle } from './../../core/models/user-table-vehicle-company';
import { GroupTableUserVehicleCompanyComponent } from 'src/shared/components/organisms/group-table-user-vehicle-company/group-table-user-vehicle-company.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupWelcomeVehicleCompanyComponent} from 'src/shared/components/organisms/group-welcome-vehicle-company/group-welcome-vehicle-company.component';
>>>>>>> origin/feature/WelcomeBlockVehicleCompany

@Component({
  selector: 'app-vehicle-company',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule,NavBarVehicleCompanyComponent,CompleteSideBarComponent],
=======
  imports: [CommonModule, 
    GroupWelcomeVehicleCompanyComponent,
    GroupTableUserVehicleCompanyComponent
    ],
>>>>>>> origin/feature/WelcomeBlockVehicleCompany
  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss'
})
export class VehicleCompanyComponent {
  // @Input() users!: User[];
}



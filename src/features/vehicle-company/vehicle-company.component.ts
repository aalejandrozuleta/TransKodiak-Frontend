import { CompleteHeaderFormVehicleComponent } from '@organisms/complete-header-form-vehicle/complete-header-form-vehicle.component';
import { CompleteSideBarComponent } from '@organisms/complete-side-bar/complete-side-bar.component';
import { NavBarVehicleCompanyComponent } from '@templates/nav-bar-vehicle-company/nav-bar-vehicle-company.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupWelcomeVehicleCompanyComponent } from 'src/shared/components/organisms/group-welcome-vehicle-company/group-welcome-vehicle-company.component';
import { GroupTableUserVehicleCompanyComponent } from '@organisms/group-table-user-vehicle-company/group-table-user-vehicle-company.component';
import { CreateModalTransporter } from '@organisms/create-modal-transporter/create-modal-transporter.component';

@Component({
  selector: 'app-vehicle-company',
  standalone: true,
  imports: [
    CommonModule,
    NavBarVehicleCompanyComponent,
    CompleteSideBarComponent,
    GroupWelcomeVehicleCompanyComponent,
    GroupTableUserVehicleCompanyComponent,
    CompleteHeaderFormVehicleComponent,
    CreateModalTransporter
  ],

  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss',
})
export class VehicleCompanyComponent {
  // @Input() users!: User[];
}
 
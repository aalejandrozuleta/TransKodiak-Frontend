import { Component } from '@angular/core';
import { InformationUserNavVehicleComponent } from '@molecules/information-user-nav-vehicle/information-user-nav-vehicle.component';
import { HeaderVehicleCompanyComponent } from '@organisms/header-vehicle-company/header-vehicle-company.component';


@Component({
  selector: 'app-nav-bar-vehicle-company',
  standalone: true,
  imports: [
    InformationUserNavVehicleComponent,
    HeaderVehicleCompanyComponent
  ],
  templateUrl: './nav-bar-vehicle-company.component.html',
  styleUrl: './nav-bar-vehicle-company.component.scss',
})
export class NavBarVehicleCompanyComponent {}

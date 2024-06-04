import { Component } from '@angular/core';
import { BlockSearchBarCompanyComponent } from '@molecules/block-search-bar-company/block-search-bar-company.component';
import { BtnOptionsNavVehicleComponent } from '@molecules/btn-options-nav-vehicle/btn-options-nav-vehicle.component';
import { InformationUserNavVehicleComponent } from '@molecules/information-user-nav-vehicle/information-user-nav-vehicle.component';


@Component({
  selector: 'app-nav-bar-vehicle-company',
  standalone: true,
  imports: [
    BlockSearchBarCompanyComponent,
    InformationUserNavVehicleComponent,
    BtnOptionsNavVehicleComponent
  ],
  templateUrl: './nav-bar-vehicle-company.component.html',
  styleUrl: './nav-bar-vehicle-company.component.scss',
})
export class NavBarVehicleCompanyComponent {}

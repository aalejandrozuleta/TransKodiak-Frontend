import { Component } from '@angular/core';
import { ButtonDeleteModalVehicleCompanyComponent } from '@atoms/button-delete-modal-vehicle-company/button-delete-modal-vehicle-company.component';
import { ButtonModalVehicleCompanyComponent } from '@atoms/button-modal-vehicle-company/button-modal-vehicle-company.component';
import { BlockSearchBarCompanyComponent } from '@molecules/block-search-bar-company/block-search-bar-company.component';

@Component({
  selector: 'app-nav-options-table-vehicle',
  standalone: true,
  imports: [
    BlockSearchBarCompanyComponent,
    ButtonDeleteModalVehicleCompanyComponent,
    ButtonModalVehicleCompanyComponent,
  ],
  templateUrl: './nav-options-table-vehicle.component.html',
  styleUrl: './nav-options-table-vehicle.component.scss',
})
export class NavOptionsTableVehicleComponent {}

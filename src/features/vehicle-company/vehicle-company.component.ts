import { Component } from '@angular/core';
import { NavBarVehicleCompanyComponent } from '@templates/nav-bar-vehicle-company/nav-bar-vehicle-company.component';

@Component({
  selector: 'app-vehicle-company',
  standalone: true,
  imports: [NavBarVehicleCompanyComponent],
  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss'
})
export class VehicleCompanyComponent {

}

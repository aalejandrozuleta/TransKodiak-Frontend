import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteSideBarComponent } from '@organisms/complete-side-bar/complete-side-bar.component';
import { NavBarVehicleCompanyComponent } from '@templates/nav-bar-vehicle-company/nav-bar-vehicle-company.component';

@Component({
  selector: 'app-vehicle-company',
  standalone: true,
  imports: [CommonModule,NavBarVehicleCompanyComponent,CompleteSideBarComponent],
  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss'
})
export class VehicleCompanyComponent {

}

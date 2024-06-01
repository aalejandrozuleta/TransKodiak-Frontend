import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupWelcomeVehicleCompanyComponent} from 'src/shared/components/organisms/group-welcome-vehicle-company/group-welcome-vehicle-company.component';

@Component({
  selector: 'app-vehicle-company',
  standalone: true,
  imports: [CommonModule, 
    GroupWelcomeVehicleCompanyComponent],
  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss'
})
export class VehicleCompanyComponent {

}

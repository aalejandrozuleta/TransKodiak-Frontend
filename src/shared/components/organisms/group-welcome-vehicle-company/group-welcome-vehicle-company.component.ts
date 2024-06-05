import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockWelcomeVehicleCompanyComponent } from 'src/shared/components/molecules/block-welcome-vehicle-company/block-welcome-vehicle-company.component';

@Component({
  selector: 'app-group-welcome-vehicle-company',
  standalone: true,
  imports: [ CommonModule, 
    BlockWelcomeVehicleCompanyComponent 
  ],
  templateUrl: './group-welcome-vehicle-company.component.html',
  styleUrl: './group-welcome-vehicle-company.component.scss'
})
export class GroupWelcomeVehicleCompanyComponent {}

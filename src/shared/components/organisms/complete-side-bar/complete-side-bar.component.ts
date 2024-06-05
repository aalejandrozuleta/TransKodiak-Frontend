import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarVehicleCompanyComponent } from '@molecules/side-bar-vehicle-company/side-bar-vehicle-company.component';

@Component({
  selector: 'app-complete-side-bar',
  standalone: true,
  imports: [CommonModule,SideBarVehicleCompanyComponent],
  templateUrl: './complete-side-bar.component.html',
  styleUrl: './complete-side-bar.component.scss'
})
export class CompleteSideBarComponent {

}

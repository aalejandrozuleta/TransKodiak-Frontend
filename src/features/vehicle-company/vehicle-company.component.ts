import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteSideBarComponent } from '@organisms/complete-side-bar/complete-side-bar.component';
@Component({
  selector: 'app-vehicle-company',
  standalone: true,
  imports: [CommonModule,CompleteSideBarComponent],
  templateUrl: './vehicle-company.component.html',
  styleUrl: './vehicle-company.component.scss'
})
export class VehicleCompanyComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCompanyComponent } from '@atoms/logo-company/logo-company.component';
import { NoCopyComponent } from '@atoms/no-copy/no-copy.component';

@Component({
  selector: 'app-side-bar-vehicle-company',
  standalone: true,
  imports: [CommonModule, LogoCompanyComponent, NoCopyComponent],
  templateUrl: './side-bar-vehicle-company.component.html',
  styleUrl: './side-bar-vehicle-company.component.scss',
})
export class SideBarVehicleCompanyComponent {}

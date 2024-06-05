import { Component } from '@angular/core';
import { NightModeComponent } from '@atoms/night-mode/night-mode.component';
import { NotificationCompanyComponent } from '@atoms/notification-company/notification-company.component';

@Component({
  selector: 'app-btn-options-nav-vehicle',
  standalone: true,
  imports: [NightModeComponent, NotificationCompanyComponent],
  templateUrl: './btn-options-nav-vehicle.component.html',
  styleUrl: './btn-options-nav-vehicle.component.scss',
})
export class BtnOptionsNavVehicleComponent {}

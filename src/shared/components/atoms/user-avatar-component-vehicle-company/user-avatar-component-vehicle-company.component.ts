import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-avatar-component-vehicle-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar-component-vehicle-company.component.html',
  styleUrl: './user-avatar-component-vehicle-company.component.scss'
})
export class UserAvatarComponentVehicleCompanyComponent {
    @Input() avatar: string = '';
  
}

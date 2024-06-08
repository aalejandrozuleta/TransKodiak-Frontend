import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'app-header-vehicle-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-vehicle-company.component.html',
  styleUrl: './header-vehicle-company.component.scss',
})
export class HeaderVehicleCompanyComponent {
  optionsMenu: MenuItem[] = [
    {
      name: 'Inicio',
      link: '/',
    },
    {
      name: 'Vehículos',
      link: '/vehicle',
    },
    {
      name: 'Nosotros',
      link: '/about',
    },
    {
      name: 'Estadísticas',
      link: '/statistic',
    },
  ];
}

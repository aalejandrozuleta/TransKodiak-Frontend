import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from '@models/menu-item';
import { BlockSearchBarCompanyComponent } from '@molecules/block-search-bar-company/block-search-bar-company.component';


@Component({
  selector: 'app-header-vehicle-company',
  standalone: true,
  imports: [CommonModule, BlockSearchBarCompanyComponent],
  templateUrl: './header-vehicle-company.component.html',
  styleUrl: './header-vehicle-company.component.scss',
})
export class HeaderVehicleCompanyComponent {
  optionsMenu: MenuItem[] = [
    {
      name: '',
      link: '/',
    },
  ];
}

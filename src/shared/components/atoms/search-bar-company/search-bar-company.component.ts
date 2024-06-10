import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeekerVehicleCompanyService } from '@services/seeker-vehicle-company.service';

@Component({
  selector: 'app-search-bar-company',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar-company.component.html',
  styleUrl: './search-bar-company.component.scss'
})
export class SearchBarCompanyComponent {
  searchValue: string = '';

  constructor(private SeekerVehicleCompanyService: SeekerVehicleCompanyService) {}

  onSearchChange() {
    this.SeekerVehicleCompanyService.getFilteredUsers(this.searchValue);
  }
}

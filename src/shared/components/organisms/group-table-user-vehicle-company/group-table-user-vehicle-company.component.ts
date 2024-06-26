import { userTableVehicle } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { UserRowComponentVehicleCompanyComponent } from '@molecules/user-row-component-vehicle-company/user-row-component-vehicle-company.component';
import { SeekerVehicleCompanyService } from '@services/seeker-vehicle-company.service';
import { EmptyStateComponent } from '@molecules/empty-state/empty-state.component'; // asegúrate de la ruta correcta

@Component({
  selector: 'app-group-table-user-vehicle-company',
  standalone: true,
  imports: [
    UserRowComponentVehicleCompanyComponent,
    CommonModule,
    EmptyStateComponent,
  ],
  templateUrl: './group-table-user-vehicle-company.component.html',
  styleUrls: ['./group-table-user-vehicle-company.component.scss'],
})
export class GroupTableUserVehicleCompanyComponent implements OnInit {
  public users: userTableVehicle[] = [];
  @Input() isEmptyState: boolean = false;

  constructor(private seekerVehicleCompanyService: SeekerVehicleCompanyService) {}

  ngOnInit() {
    this.seekerVehicleCompanyService.filteredDates.subscribe((data) => {
      this.users = data;
      this.isEmptyState = this.users.length === 0;
    });
  }
}

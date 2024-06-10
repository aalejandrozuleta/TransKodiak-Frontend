import { userTableVehicle } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CheckComponentVehicleCompanyComponent } from '@atoms/check-component-vehicle-company/check-component-vehicle-company.component';
import { UserRowComponentVehicleCompanyComponent } from '@molecules/user-row-component-vehicle-company/user-row-component-vehicle-company.component';
import { AdministrationUserVehicleCompanyService } from '@services/administration-user-vehicle-company.service';
import { UserVehicleCompanyService } from '@services/user-vehicle-company.service';

@Component({
  selector: 'app-group-table-user-vehicle-company',
  standalone: true,
  imports: [
    UserRowComponentVehicleCompanyComponent,
    CommonModule,
    CheckComponentVehicleCompanyComponent
  ],
  templateUrl: './group-table-user-vehicle-company.component.html',
  styleUrls: ['./group-table-user-vehicle-company.component.scss']
})
export class GroupTableUserVehicleCompanyComponent implements OnInit {

  users: userTableVehicle[] = [];

  constructor(
    private userVehicleCompanyService: UserVehicleCompanyService,
    private administrationUserVehicleCompanyService: AdministrationUserVehicleCompanyService
  ) {}

  ngOnInit() {
    this.users = this.userVehicleCompanyService.getUsers();
  }

  deleteUser(userId: number) {
    this.administrationUserVehicleCompanyService.deleteUser(userId);
    this.users = this.userVehicleCompanyService.getUsers();
  }
}

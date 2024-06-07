import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationUserVehicleCompanyService {

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) { }

  deleteUser(userId: number) {
    const users = this.userVehicleCompanyService.getUsers();
    const updatedUsers = users.filter(user => user.id !== userId);
    this.userVehicleCompanyService.setUsers(updatedUsers);
  }
}

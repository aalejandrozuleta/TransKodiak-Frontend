import { userTableVehicle } from '@models/user-table-vehicle-company';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';

@Injectable({
  providedIn: 'root',
})
export class SeekerVehicleCompanyService {
  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {}

  getFilteredUsers(search: string) {
    let users: userTableVehicle[] = this.userVehicleCompanyService.getUsers();

    if (search) {
      users = users.filter((user) =>
        user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      this.userVehicleCompanyService.setUsers(users);
    } else {
      this.userVehicleCompanyService.resetUsers();
    }
    return users;
  }
}

import { userTableVehicle } from '@models/user-table-vehicle-company';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';


@Injectable({
  providedIn: 'root'
})
export class SeekerVehicleCompanyService {
  constructor(private userVehicleCompanyService: UserVehicleCompanyService) { }

  getFilteredUsers(search:string) {
    let users: userTableVehicle[] = this.userVehicleCompanyService.getUsers();
    let filteredUsers = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    console.log(filteredUsers);
    return filteredUsers;
  }
}

import { userTableVehicle } from '@models/user-table-vehicle-company';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';

@Injectable({
  providedIn: 'root',
})
export class SeekerVehicleCompanyService {
  dates: userTableVehicle[] = [];
  datesCopy: userTableVehicle[] = [];
  filteredDates: userTableVehicle[] = [];

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {
    this.userVehicleCompanyService.getTransporters().subscribe(data => {
      this.dates = data;
      // Hacemos la copia aquí, después de que los datos se hayan cargado
      this.datesCopy = [...data];
      this.filteredDates = [...data];
    });
  }

  getFilteredUsers(search: string) {
    if (search) {
      this.filteredDates = this.datesCopy.filter((user) =>
        user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    } else {
      // Cuando el buscador está vacío, restablecemos los datos a su estado original
      this.filteredDates = [...this.datesCopy];
    }
  }
}




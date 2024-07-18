import { userTableVehicle } from '@models/user-table-vehicle-company';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeekerVehicleCompanyService {
  dates: userTableVehicle[] = []; // Arreglo para almacenar los datos de transportadores
  datesCopy: userTableVehicle[] = []; // Copia de los datos originales
  filteredDates: BehaviorSubject<userTableVehicle[]> = new BehaviorSubject<
    userTableVehicle[]
  >([]);

  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {
    this.userVehicleCompanyService.getTransporters().subscribe((data) => {
      this.dates = data;
      this.datesCopy = [...data];
      this.filteredDates.next([...data]);
    });
  }

  // Método para filtrar los usuarios según la búsqueda
  getFilteredUsers(search: string) {
    let filteredDates: userTableVehicle[] = [];
    if (search) {
      filteredDates = this.datesCopy.filter((user) =>
        user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    } else {
      filteredDates = [...this.datesCopy];
    }
    this.filteredDates.next(filteredDates);
  }
}

import { userTableVehicle } from '@models/user-table-vehicle-company';
import { Injectable } from '@angular/core';
import { UserVehicleCompanyService } from './user-vehicle-company.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeekerVehicleCompanyService {
  dates: userTableVehicle[] = [];
  datesCopy: userTableVehicle[] = [];
  filteredDates: BehaviorSubject<userTableVehicle[]> = new BehaviorSubject<userTableVehicle[]>([]);


  constructor(private userVehicleCompanyService: UserVehicleCompanyService) {
    this.userVehicleCompanyService.getTransporters().subscribe((data) => {
      this.dates = data;
      // Hacemos la copia aquí, después de que los datos se hayan cargado
      this.datesCopy = [...data];
      this.filteredDates.next([...data]);
    });
  }

  getFilteredUsers(search: string) {
    let filteredDates: userTableVehicle[] = [];
    if (search) {
      filteredDates = this.datesCopy.filter((user) =>
        user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    } else {
      // Cuando el buscador está vacío, restablecemos los datos a su estado original
      filteredDates = [...this.datesCopy];
    }
    this.filteredDates.next(filteredDates);
  }
}

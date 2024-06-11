import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { AdministrationUserVehicleCompanyService } from './administration-user-vehicle-company.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {

  constructor(private http: HttpClient) {}

  getTransporters() {
    return this.http.get<userTableVehicle[]>(
      'http://localhost:8000/transporter'
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8000/transporter/${id}`);
  }
  

}

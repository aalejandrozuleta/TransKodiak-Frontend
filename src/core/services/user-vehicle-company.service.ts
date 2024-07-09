import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { HttpClient } from '@angular/common/http';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {  
  private url = environment.API_URL;
  constructor(private http: HttpClient) {}

  getTransporters() {
    return this.http.get<userTableVehicle[]>(
      `${this.url}transporter`,
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}${id}`);
  }

  createUserTransporter(user: userTransporterCreate) {
    return this.http.post(`${this.url}transporter`, user);
  }

  createVehicle(vehicle: registerVehicle) {
    return this.http.post(`${this.url}transporter`,vehicle);
  }

  getUserById(id: number) {
    return this.http.get<userTableVehicle>(
      `${this.url}${id}`,
    );
  }
  editUserVehicleCompany(user: editUserVehicleCompany) {
    return this.http.put(`${this.url}`,user);
  }
}

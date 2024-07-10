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

  //vehicle Company

  getTransporters() {
    return this.http.get<userTableVehicle[]>(
      `${this.url}transporter`,
    );
  }

  createVehicle(vehicle: registerVehicle) {
    return this.http.post(`${this.url}transporter`,vehicle);
  }

  editUserVehicleCompany(user: editUserVehicleCompany) {
    return this.http.put(`${this.url}`,user);
  }

  // Empresa Intermediaria

  // Tranportador

  createUserTransporter(user: userTransporterCreate) {
    return this.http.post(`${this.url}transporter`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}${id}`);
  }

  getUserById(id: number) {
    return this.http.get<userTableVehicle>(
      `${this.url}${id}`,
    );
  }

}

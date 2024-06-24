import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { HttpClient } from '@angular/common/http';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';

@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {
  constructor(private http: HttpClient) {}

  getTransporters() {
    return this.http.get<userTableVehicle[]>(
      'http://localhost:8000/transporter',
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8000/transporter/${id}`);
  }

  createUserTransporter(user: userTransporterCreate) {
    return this.http.post('http://localhost:8000/transporter', user);
  }

  createVehicle(vehicle: registerVehicle) {
    return this.http.post('http://localhost:8000/vehicle', vehicle);
  }

  getUserById(id: number) {
    return this.http.get<userTableVehicle>(
      `http://localhost:8000/transporter/${id}`,
    );
  }
  editUserVehicleCompany(user: editUserVehicleCompany) {
    return this.http.put('http://localhost:8000/transporter', user);
  }
}

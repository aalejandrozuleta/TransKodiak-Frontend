import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { HttpClient } from '@angular/common/http';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';
import { environment } from 'src/environment/environment';
import { registerCompanies } from '@models/registerCompanies';

@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {  
  private url = environment.API_URL;
  private vehicleCompany = "api/vehicleCompany/"
  private intermediaryCompany = "api/intermediary/"
  private transporter = "api/transporter/"
  constructor(private http: HttpClient) {}

  //vehicle Company

  createUserVehicleCompany(user: registerCompanies){
    console.log(user)
    return this.http.post(`${this.url}${this.vehicleCompany}register`, user, { withCredentials: true })
  }

  getTransporters() {
    return this.http.get<userTableVehicle[]>(
      `${this.url}${this.vehicleCompany}/getUser`,
    );
  }

  createVehicle(vehicle: registerVehicle) {
    return this.http.post(`${this.url}${this.vehicleCompany}createVehicle`,vehicle);
  }

  editUserVehicleCompany(user: editUserVehicleCompany) {
    return this.http.put(`${this.url}${this.vehicleCompany}editVehicle`,user);
  }

  // Empresa Intermediaria

  createUserIntermediaryCompany(user: registerCompanies){
    return this.http.post(`${this.url}${this.intermediaryCompany}register`, user);
  }

  // Tranportador

  createUserTransporter(user: userTransporterCreate) {
    return this.http.post(`${this.url}${this.transporter}createTransporter`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}${this.transporter}${id}`);
  }

  getUserById(id: number) {
    return this.http.get<userTableVehicle>(
      `${this.url}${this.transporter}${id}`,
    );
  }

}

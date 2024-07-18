import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { HttpClient } from '@angular/common/http';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';
import { environment } from 'src/environment/environment';
import { registerCompanies } from '@models/registerCompanies';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {
  private url = environment.API_URL;
  private vehicleCompany = 'api/vehicleCompany/';
  private intermediaryCompany = 'api/intermediary/';
  private transporter = 'api/transporter/';
  private general = 'api/general/';
  constructor(private http: HttpClient) {}

  //auth
  authUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}${this.general}auth`, user).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        } else {
          // Manejo de errores o casos donde no se recibe el token
          console.error('Token no recibido en la respuesta del servidor.');
        }
      }),
    );
  }

  //vehicle Company

  createUserVehicleCompany(user: registerCompanies) {
    console.log(user);
    return this.http.post(`${this.url}${this.vehicleCompany}register`, user);
  }

  getTransporters() {
    return this.http.get<userTableVehicle[]>(
      `${this.url}${this.vehicleCompany}getUser`,
    );
  }

  createVehicle(vehicle: registerVehicle) {
    return this.http.post(
      `${this.url}${this.vehicleCompany}createVehicle`,
      vehicle,
    );
  }

  editUserVehicleCompany(user: editUserVehicleCompany) {
    return this.http.put(`${this.url}${this.vehicleCompany}editVehicle`, user);
  }

  // Empresa Intermediaria

  createUserIntermediaryCompany(user: registerCompanies) {
    return this.http.post(
      `${this.url}${this.intermediaryCompany}register`,
      user,
    );
  }

  // Tranportador

  createUserTransporter(user: userTransporterCreate) {
    console.log(user);
    return this.http.post(
      `${this.url}${this.transporter}register`,
      user,
    );
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

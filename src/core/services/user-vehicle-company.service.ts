import { Router} from '@angular/router';
import { recoveryPassword } from './../models/recoveryPassword';
import { registerVehicle } from './../models/registerVehicle';
import { userTransporterCreate } from './../models/userTransporter';
import { Injectable } from '@angular/core';
import { userTableVehicle } from '@models/user-table-vehicle-company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { editUserVehicleCompany } from '@models/editUserVehicleCompany';
import { environment } from 'src/environment/environment';
import { registerCompanies } from '@models/registerCompanies';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserVehicleCompanyService {
  private url = environment.API_URL;
  private vehicleCompany = 'api/vehicleCompany/';
  private intermediaryCompany = 'api/intermediary/';
  private transporter = 'api/transporter/';
  private general = 'api/general/';
  
  
  constructor(
    private http: HttpClient,
    private router: Router // Asegúrate de inyectar Router aquí
  ) {}

  //auth/
authUser(user: any): Observable<any> {
  return this.http.post<any>(`${this.url}${this.general}auth`, user).pipe(
    tap((response) => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/vehicleCompany']);
      } else {
        // Manejo de errores o casos donde no se recibe el token
        console.error('Token no recibido en la respuesta del servidor.');
      }
    }),
    catchError((error) => {
      console.error('Error en la solicitud HTTP:', error);
      return throwError(error);
    })
  );
}

  //Recovery Password (email-number)
  recoveryPasswords(user: recoveryPassword) {
    console.log(user);
    return this.http.post(`${this.url}${this.general}getCode`, user);
  }

  //Recovery Password (email-code)
  recoveryPasswordsCode(user: recoveryPassword) {
    console.log(user);
    return this.http.put(`${this.url}${this.general}forgetPassword`, user);
  }

  //vehicle Company

  createUserVehicleCompany(user: registerCompanies) {
    console.log(user);
    return this.http.post(`${this.url}${this.vehicleCompany}register`, user);
  }

  getTransporters(): Observable<userTableVehicle[]> {
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem('token');

    // Verificar si el token está presente
    if (token) {
      // Configurar los encabezados para incluir el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      // Realizar la solicitud HTTP con los encabezados configurados
      return this.http
        .get<{
          message: string;
          transporters: userTableVehicle[];
        }>(`${this.url}${this.transporter}listTransporters`, { headers })
        .pipe(
          tap((response) => {
            console.log('Datos recibidos:');
          }),
          map((response) => response.transporters), // Mapear la respuesta para extraer solo el array de transportadores
        );
    } else {
      // Manejar el caso donde no se encuentre el token en localStorage
      console.error('No se encontró el token en localStorage.');
      // Puedes retornar un Observable con un error o manejarlo de otra manera
      return throwError('No se encontró el token en localStorage.');
    }
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
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem('token');

    // Verificar si el token está presente
    if (token) {
      // Configurar los encabezados para incluir el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      // Realizar la solicitud HTTP con los encabezados configurados
      return this.http.post(`${this.url}${this.transporter}register`, user, {
        headers,
      });
    } else {
      // Manejar el caso donde no se encuentre el token en localStorage
      console.error('No se encontró el token en localStorage.');
      // Puedes retornar un Observable con un error o manejarlo de otra manera
      return throwError('No se encontró el token en localStorage.');
    }
  }

  deleteUser(id: number) {
    const url = `${this.url}${this.transporter}disable/${id}`;

    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem('token');

    // Verificar si el token está presente
    if (token) {
      // Configurar los encabezados para incluir el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      // Realizar la solicitud HTTP con los encabezados configurados
      return this.http.put(url, null, { headers });
    } else {
      return throwError('No se encontró el token en localStorage.');
    }
  }

  getUserById(id: number) {
    return this.http.get<userTableVehicle>(
      `${this.url}${this.transporter}${id}`,
    );
  }
}

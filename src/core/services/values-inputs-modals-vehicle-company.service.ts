import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';
import { userTransporterCreate } from '@models/userTransporter';
import { AdministrationUserTransporterService } from './administration-user-transporter.service';

@Injectable({
  providedIn: 'root',
})
export class ValuesInputsModalsVehicleCompanyService {
  constructor(
    private AdministrationUserTransporterService: AdministrationUserTransporterService,
  ) {}

  newUser: userTransporterCreate = {
    name: '',
    idNumber: '',
    phone: '',
    email: '',
    license: '',
    password: '',
    idVehicle: '',
  };

  createUser(field: keyof userTransporterCreate, value: string) {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        // Decodificar el token
        const decodedToken: any = jwtDecode(token);
        console.log(decodedToken.id);
        

        // Asignar el valor del id a idVehicle
        this.newUser.idVehicle = decodedToken.id;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
    
    // Asignar el valor al campo especificado
    this.newUser[field] = value;
    console.log(this.newUser);
  }

  onClick() {
    this.AdministrationUserTransporterService.registerUserTransporter(
      this.newUser,
    );
  }
}

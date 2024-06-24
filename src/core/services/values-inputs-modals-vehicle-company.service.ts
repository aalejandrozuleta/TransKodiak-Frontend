import { AdministrationUserVehicleCompanyService } from '@services/administration-user-vehicle-company.service';
import { userTransporterCreate } from '@models/userTransporter';
 import { Injectable } from '@angular/core';

 
 
 @Injectable({
   providedIn: 'root'
 })
 export class ValuesInputsModalsVehicleCompanyService {

  constructor(private administrationUserVehicleCompanyService: AdministrationUserVehicleCompanyService) { }

  newUser: userTransporterCreate = {
    name:'',
    email:'',
    phone:'',
    license:'',
  }
  createUser(field: keyof userTransporterCreate, value: string){
    this.newUser[field] = value;
    console.log(this.newUser); 
  }
  
  onClick(){
    this.administrationUserVehicleCompanyService.registerTransporter(this.newUser);
  }
}
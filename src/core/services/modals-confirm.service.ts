//import {AdministrationUserTransporterService} from '@services/administr'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalsConfirmService {
  constructor(
    private AdministrationUserVehicleCompanyService: AdministrationUserVehicleCompanyService,
  ) {}

  deleteTransporter(id: number) {
    this.AdministrationUserVehicleCompanyService.deleteUserTransporter(id);
  }
}

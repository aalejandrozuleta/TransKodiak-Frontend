import { AdministrationUserVehicleCompanyService } from '@services/administration-user-vehicle-company.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalsConfirmService {
  constructor(
    private AdministrationUserVehicleCompanyService: AdministrationUserVehicleCompanyService,
  ) {}

  deleteTransporter(id: number) {
    this.AdministrationUserVehicleCompanyService.deleteUser(id);
  }
}

import { AdministrationUserTransporterService } from './administration-user-transporter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalsConfirmService {
  constructor(
    private AdministrationUserTransporterService: AdministrationUserTransporterService,
  ) {}

  deleteTransporter(id: number) {
    this.AdministrationUserTransporterService.deleteUserTransporter(id);
  }
}

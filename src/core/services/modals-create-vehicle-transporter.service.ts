import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalsCreateVehicleTransporterService {
  private _showModalCreateVehicle = new BehaviorSubject<boolean>(false);
  private _showModalCreateTransporter = new BehaviorSubject<boolean>(false);
  private _showModalDeleteTransporter = new BehaviorSubject<boolean>(false);

  showModalCreateVehicle = this._showModalCreateVehicle.asObservable();
  showModalCreateTransporter = this._showModalCreateTransporter.asObservable();
  showModalDeleteTransporter = this._showModalDeleteTransporter.asObservable();

  // Modales para abrir los registros
  openModalCreateVehicle() {
    this._showModalCreateVehicle.next(true);
  }
  openModalCreateTransporter() {
    this._showModalCreateTransporter.next(true);
  }
  closeModalCreateVehicle() {
    this._showModalCreateVehicle.next(false);
  }
  closeModalCreateTransporter() {
    this._showModalCreateTransporter.next(false);
  }

  //** */

  // Mensaje de confirmacion para eliminar
  openModalDeleteTransporter() {
    this._showModalDeleteTransporter.next(true);
  }

  closeModalDeleteTransporter() {
    this._showModalDeleteTransporter.next(false);
  }

  //** */
  next() {
    this.closeModalCreateVehicle();
    this.openModalCreateTransporter();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsCreateVehicleTransporterService {
  constructor() { }

 private  _showModalCreateVehicle = new BehaviorSubject<boolean>(false);
 private _showModalCreateTransporter = new BehaviorSubject<boolean>(false);

  showModalCreateVehicle = this._showModalCreateVehicle.asObservable();
  showModalCreateTransporter = this._showModalCreateTransporter.asObservable();

  openModalCreateVehicle() {
    this._showModalCreateVehicle.next(true);
    console.log("Modal1")
  }
  openModalCreateTransporter() {
    this._showModalCreateTransporter.next(true);
    console.log("Modal2")
  }
  closeModalCreateVehicle() {
    this._showModalCreateVehicle.next(false);
    console.log("Modal close1")
  }
  closeModalCreateTransporter() {
    this._showModalCreateTransporter.next(false);
    console.log("Modal close2")
  }
  next() {
    this.closeModalCreateVehicle();
    this.openModalCreateTransporter();
  }
}

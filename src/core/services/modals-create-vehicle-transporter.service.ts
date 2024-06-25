import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalsCreateVehicleTransporterService {

  private showModalCreateVehicle: BehaviorSubject <'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');
  private showModalCreateTransporter: BehaviorSubject <'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');


  private _showModalDeleteTransporter = new BehaviorSubject<boolean>(false);
  showModalDeleteTransporter = this._showModalDeleteTransporter.asObservable();

  watchCreateVehicle(): Observable<'open' | 'close'> {
    return this.showModalCreateVehicle.asObservable();
  }

  openCreateVehicle() {
    console.log('openCreateVehicle - Emitiendo open');
    this.showModalCreateVehicle.next('open');
  }

  closeCreateVehicle() {
    this.showModalCreateVehicle.next('close');
  }

  watchCreateTransporter(): Observable<'open' | 'close'> {
    return this.showModalCreateTransporter.asObservable();
  }

  openCreateTransporter() {
    console.log('openCreateTransporter - Emitiendo open');
    this.showModalCreateTransporter.next('open');
  }

  closeCreateTransporter() {
    this.showModalCreateTransporter.next('close');
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
}

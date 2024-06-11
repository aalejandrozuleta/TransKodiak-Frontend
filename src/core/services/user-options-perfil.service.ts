import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserOptionsPerfilService {
  private modalStatus = new BehaviorSubject<boolean>(false);
  modalStatus$ = this.modalStatus.asObservable();

  constructor() {}

  openModal() {
    this.modalStatus.next(true);
  }

  closeModal() {
    this.modalStatus.next(false);
  }

  editPerfil() {
    console.log('edit');
  }

  changePasswords() {
    console.log('change');
  }

  emailUser() {
    console.log('email');
  }

  closeUser() {
    console.log('close');
  }

  disableUser() {
    console.log('disable');
  }
}

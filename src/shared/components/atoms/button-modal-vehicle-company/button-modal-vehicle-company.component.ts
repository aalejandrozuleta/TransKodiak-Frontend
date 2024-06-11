import { CompleteHeaderFormVehicleComponent } from '@organisms/complete-header-form-vehicle/complete-header-form-vehicle.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-modal-vehicle-company',
  standalone: true,
  imports: [CompleteHeaderFormVehicleComponent, 
    CommonModule],
  templateUrl: './button-modal-vehicle-company.component.html',
  styleUrl: './button-modal-vehicle-company.component.scss'
})
export class ButtonModalVehicleCompanyComponent {

  showModal = false;

  onClick() {
    this.showModal = !this.showModal;
  }

  handleClose() {
    this.showModal = false;
  }
}

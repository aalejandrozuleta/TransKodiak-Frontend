import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-cancel-block-modal',
  standalone: true,
  imports: [],
  templateUrl: './button-cancel-block-modal.component.html',
  styleUrl: './button-cancel-block-modal.component.scss',
})
export class ButtonCancelBlockModalComponent {
  constructor(
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}

  closeModalConfirm() {
    this.ModalsCreateVehicleTransporterService.closeModalDeleteTransporter();
  }
}

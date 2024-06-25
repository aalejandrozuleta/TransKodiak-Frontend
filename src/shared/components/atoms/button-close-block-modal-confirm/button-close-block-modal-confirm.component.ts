import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-close-block-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './button-close-block-modal-confirm.component.html',
  styleUrl: './button-close-block-modal-confirm.component.scss',
})
export class ButtonCloseBlockModalConfirmComponent {
  closeBlockModalImg = '../../../../assets/icons/x-modal.png';

  constructor(
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}

  closeModalConfirm() {
    this.ModalsCreateVehicleTransporterService.closeModalDeleteTransporter();
  }
}

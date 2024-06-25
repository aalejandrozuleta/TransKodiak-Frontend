import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Component, Input } from '@angular/core';
import { ModalsConfirmService } from '@services/modals-confirm.service';

@Component({
  selector: 'app-button-block-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './button-block-modal-confirm.component.html',
  styleUrl: './button-block-modal-confirm.component.scss',
})
export class ButtonBlockModalConfirmComponent {
  @Input() idUser: number = 0;
  constructor(
    private ModalsConfirmService: ModalsConfirmService,
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}
  deleteTransporter() {
    this.ModalsConfirmService.deleteTransporter(this.idUser);
    this.ModalsCreateVehicleTransporterService.closeModalDeleteTransporter();
  }
}

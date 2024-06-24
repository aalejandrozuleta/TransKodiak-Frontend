import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Subscription } from 'rxjs';
import { CreateModalVehicleComponent } from '@organisms/create-modal-vehicle/create-modal-vehicle.component';

@Component({
  selector: 'app-button-modal-vehicle-company',
  standalone: true,
  imports: [CreateModalVehicleComponent, CommonModule],
  templateUrl: './button-modal-vehicle-company.component.html',
  styleUrl: './button-modal-vehicle-company.component.scss',
})
export class ButtonModalVehicleCompanyComponent implements OnInit, OnDestroy {
  img = '../../../../assets/imagenes/agregar-usuario (1).png';
  showModal = false;
  private subscription: Subscription = Subscription.EMPTY;

  constructor(
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}

  ngOnInit() {
    this.subscription =
      this.ModalsCreateVehicleTransporterService.showModalCreateVehicle.subscribe(
        (status) => {
          this.showModal = status;
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModal() {
    this.ModalsCreateVehicleTransporterService.openModalCreateVehicle();
  }
}

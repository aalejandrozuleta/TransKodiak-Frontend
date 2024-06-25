import { userTableVehicle } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserAvatarComponentVehicleCompanyComponent } from '@atoms/user-avatar-component-vehicle-company/user-avatar-component-vehicle-company.component';
import { BlockModalConfirmComponent } from '@organisms/block-modal-confirm/block-modal-confirm.component';
import { CompleteHeaderFormVehicleComponent } from '@organisms/complete-header-form-vehicle/complete-header-form-vehicle.component';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-row-component-vehicle-company',
  standalone: true,
  imports: [
    CommonModule,
    UserAvatarComponentVehicleCompanyComponent,
    CompleteHeaderFormVehicleComponent,
    BlockModalConfirmComponent,
  ],
  templateUrl: './user-row-component-vehicle-company.component.html',
  styleUrls: ['./user-row-component-vehicle-company.component.scss'],
})
export class UserRowComponentVehicleCompanyComponent
  implements OnInit, OnDestroy
{
  delete = '../../../../assets/imagenes/borrar.png';
  editar = '../../../../assets/imagenes/editar.png';
  asignar = '../../../../assets/imagenes/entrega.png';
  deleteModal = '../../../../assets/icons/basura.png';
  idUser: number = 0;

  @Input() user!: userTableVehicle;

  constructor(
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}

  showModal = false;
  showModalConfirm = true;
  private subscription: Subscription = Subscription.EMPTY;

  messageDelete = `¿Estás seguro de que deseas borrara este usuario?, Esta acción no se puede deshacer.`;

  ngOnInit() {
    this.subscription =
      this.ModalsCreateVehicleTransporterService.showModalCreateVehicle.subscribe(
        (status) => {
          this.showModal = status;
        },
      );

    this.subscription =
      this.ModalsCreateVehicleTransporterService.showModalDeleteTransporter.subscribe(
        (status) => {
          this.showModalConfirm = status;
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModalVehicle() {
    this.ModalsCreateVehicleTransporterService.openModalCreateVehicle();
  }

  openModalConfirm() {
    this.ModalsCreateVehicleTransporterService.openModalDeleteTransporter();
    this.idUser = this.user.id;
  }
}

import { userTableVehicle } from './../../../../core/models/user-table-vehicle-company';
import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { UserAvatarComponentVehicleCompanyComponent } from '@atoms/user-avatar-component-vehicle-company/user-avatar-component-vehicle-company.component';
import { CompleteHeaderFormVehicleComponent } from '@organisms/complete-header-form-vehicle/complete-header-form-vehicle.component';
import { AdministrationUserVehicleCompanyService } from '@services/administration-user-vehicle-company.service';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-row-component-vehicle-company',
  standalone: true,
  imports: [
    CommonModule,
    UserAvatarComponentVehicleCompanyComponent,
    CompleteHeaderFormVehicleComponent
  ],
  templateUrl: './user-row-component-vehicle-company.component.html',
  styleUrls: ['./user-row-component-vehicle-company.component.scss'],
})
export class UserRowComponentVehicleCompanyComponent implements OnInit, OnDestroy   {
  delete = '../../../../assets/imagenes/borrar.png';
  editar = '../../../../assets/imagenes/editar.png';
  asignar = '../../../../assets/imagenes/entrega.png';

  @Input() user!: userTableVehicle;

  constructor (private AdministrationUserVehicleCompanyService:AdministrationUserVehicleCompanyService,
              private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService){}


  deleteUserHandler(id: number) {
    this.AdministrationUserVehicleCompanyService.deleteUser(id);
  }

  showModal1 = false;
  private subscription: Subscription = Subscription.EMPTY;

  

  ngOnInit() {
    this.subscription = this.ModalsCreateVehicleTransporterService.showModalCreateVehicle.subscribe(status => {
      this.showModal1 = status;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModalVehicle() {
    this.ModalsCreateVehicleTransporterService.openModalCreateVehicle();
  }

}

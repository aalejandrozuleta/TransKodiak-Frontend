import { CommonModule } from '@angular/common';
import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { CreateModalVehicleComponent } from '@organisms/create-modal-vehicle/create-modal-vehicle.component';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-next',
  standalone: true,
  imports: [CommonModule, CreateModalVehicleComponent],
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.scss'],
})
export class ButtonNextComponent implements OnInit, OnDestroy {
  modal = false;
  text: string = 'Siguiente';
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService) {}

  ngOnInit() {
    this.subscription = this.ModalsCreateVehicleTransporterService.showModalCreateTransporter.subscribe(status => {
      this.modal = status;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  openModal() {
    this.ModalsCreateVehicleTransporterService.next();
  }
}

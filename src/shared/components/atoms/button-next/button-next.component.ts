import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
  subscription: Subscription = Subscription.EMPTY;

  constructor(
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}

  ngOnInit() {
    this.subscription =
      this.ModalsCreateVehicleTransporterService.watchCreateVehicle().subscribe(
        (state: 'open' | 'close') => {
          this.modal = state === 'open';
        },
      );
  }

  openModal()  {
    console.log('hola');
     this.ModalsCreateVehicleTransporterService.openCreateVehicle();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-cancel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-cancel.component.html',
  styleUrl: './button-cancel.component.scss',
})
export class ButtonCancelComponent  implements  OnDestroy {
  text: string = 'Cancel';
  subscription: Subscription = Subscription.EMPTY;

  constructor(
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService
  ) { }

  closeModal() {
    this.ModalsCreateVehicleTransporterService.closeCreateVehicle();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
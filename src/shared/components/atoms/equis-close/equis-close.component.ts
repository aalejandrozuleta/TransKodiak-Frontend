import { CommonModule } from '@angular/common';
import { Component, OnDestroy} from '@angular/core';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-equis-close',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equis-close.component.html',
  styleUrl: './equis-close.component.scss',
})
export class EquisCloseComponent implements OnDestroy {
  subscription: Subscription = Subscription.EMPTY;
  constructor (private ModalsCreateVehicleTransporterService:ModalsCreateVehicleTransporterService){

  }

  closeModal() {
    this.ModalsCreateVehicleTransporterService.closeCreateTransporter();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

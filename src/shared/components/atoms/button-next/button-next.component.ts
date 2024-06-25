import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateModalVehicleComponent } from '@organisms/create-modal-vehicle/create-modal-vehicle.component';

@Component({
  selector: 'app-button-next',
  standalone: true,
  imports: [CommonModule, CreateModalVehicleComponent],
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.scss'],
})
export class ButtonNextComponent {
  text: string = 'Siguiente';
}

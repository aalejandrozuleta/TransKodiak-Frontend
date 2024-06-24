import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-create-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tittle-modal-vehicle-company.component.html',
  styleUrl: './tittle-modal-vehicle-company.component.scss',
})
export class TitleCreateVehicleComponent {
  @Input() title: string = '';
}

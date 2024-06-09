import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtittle-create-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtitle-create.component.html',
  styleUrl: './subtitle-create.component.scss'
})
export class SubtittleCreateVehicleComponent {
  @Input() subtitle: string= '';
}
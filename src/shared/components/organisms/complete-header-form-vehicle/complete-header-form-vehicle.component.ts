import { CommonModule } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { FormButtonsComponent } from '@molecules/form-buttons/form-buttons.component';
import { HeaderFormCreateVehicleComponent } from '@molecules/form-header-vehicle-company/form-header-vehicle-company.component';

@Component({
  selector: 'app-complete-header-form-vehicle',
  standalone: true,
  imports: [CommonModule, 
    HeaderFormCreateVehicleComponent,
    FormFieldComponent,
    FormButtonsComponent
  ],
  templateUrl: './complete-header-form-vehicle.component.html',
  styleUrls: ['./complete-header-form-vehicle.component.scss']
})
export class CompleteHeaderFormVehicleComponent {
  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.close.emit();
  }
}
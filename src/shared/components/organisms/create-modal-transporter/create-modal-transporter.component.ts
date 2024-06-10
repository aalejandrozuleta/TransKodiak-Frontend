import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { FormButtonsComponent } from '@molecules/form-buttons/form-buttons.component';
import { HeaderFormCreateVehicleComponent } from '@molecules/form-header-vehicle-company/form-header-vehicle-company.component';

@Component({
  selector: 'app-create-modal-transporter',
  standalone: true,
  imports: [CommonModule, 
    HeaderFormCreateVehicleComponent,
    FormFieldComponent,
    FormButtonsComponent
  ],
  templateUrl: './create-modal-transporter.component.html',
  styleUrls: ['./create-modal-transporter.component.scss']
})
export class CreateModalTransporter {
  handleClose() {
    console.log('Cerrar modal'); // Aquí puedes añadir la lógica para cerrar el modal
  }
}
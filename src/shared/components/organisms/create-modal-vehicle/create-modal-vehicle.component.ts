import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { FormButtonsComponent } from '@molecules/form-buttons/form-buttons.component';
import { HeaderFormCreateVehicleComponent } from '@molecules/form-header-vehicle-company/form-header-vehicle-company.component';
import { ValuesInputsModalsVehicleCompanyService } from '@services/values-inputs-modals-vehicle-company.service';
import { ModalsCreateVehicleTransporterService } from '@services/modals-create-vehicle-transporter.service';


@Component({
  selector: 'app-create-modal-vehicle',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFormCreateVehicleComponent,
    FormFieldComponent,
    FormButtonsComponent,
  ],
  templateUrl: './create-modal-vehicle.component.html',
  styleUrls: ['./create-modal-vehicle.component.scss'],
})
export class CreateModalVehicleComponent {
  text: string = 'Guardar';

  constructor(
    private ValuesInputsModalsVehicleCompanyService: ValuesInputsModalsVehicleCompanyService,
    private ModalsCreateVehicleTransporterService: ModalsCreateVehicleTransporterService,
  ) {}

  formData = [
    {
      id: 'name',
      type: 'text',
      placeholder: 'Nombre',
      field: 'name',
    },
    {
      
      id: 'idNumber',
      type: 'text',
      placeholder: 'Cédula',
      field: 'idNumber',
    },
    {
      
      id: 'email',
      type: 'email',
      placeholder: 'Email',
      field: 'email',
    },
    {
      
      id: 'phone',
      type: 'text',
      placeholder: 'Telefono',
      field: 'phone',
    },
    {
      
      id: 'licencia',
      type: 'text',
      placeholder: 'Licencia',
      field: 'license',
    },
    {
      
      id: 'password',
      type: 'password',
      placeholder: 'Contraseña',
      field: 'password',
    }
  ];

  saveDate() {
    this.ValuesInputsModalsVehicleCompanyService.onClick();
    this.ModalsCreateVehicleTransporterService.closeCreateTransporter();
  }
}

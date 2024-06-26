import { VehicleForm } from '@models/vehicleForm';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { FormButtonsComponent } from '@molecules/form-buttons/form-buttons.component';
import { HeaderFormCreateVehicleComponent } from '@molecules/form-header-vehicle-company/form-header-vehicle-company.component';

@Component({
  selector: 'app-complete-header-form-vehicle',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFormCreateVehicleComponent,
    FormFieldComponent,
    FormButtonsComponent,
  ],
  templateUrl: './complete-header-form-vehicle.component.html',
  styleUrls: ['./complete-header-form-vehicle.component.scss'],
})
export class CompleteHeaderFormVehicleComponent {
  dataform: VehicleForm[] = [
    {
      label: 'Tipo de Vehiculo',
      id: 'tipo-vehiculo',
      type: 'text',
      placeholder: 'Tipo',
      fild: 'typeVehicle',
    },
    {
      label: 'Placa',
      id: 'placa',
      type: 'text',
      placeholder: 'Placa',
      fild: 'plate',
    },
    {
      label: 'Capacidad',
      id: 'capacidad',
      type: 'text',
      placeholder: 'Capacidad',
      fild: 'capacity',
    },
    {
      label: 'Tipo de Carga',
      id: 'tipo-carga',
      type: 'text',
      placeholder: 'Carga',
      fild: 'typeLoad',
    },
  ];
}

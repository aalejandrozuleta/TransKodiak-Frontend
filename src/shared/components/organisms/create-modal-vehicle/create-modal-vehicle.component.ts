import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { FormButtonsComponent } from '@molecules/form-buttons/form-buttons.component';
import { HeaderFormCreateVehicleComponent } from '@molecules/form-header-vehicle-company/form-header-vehicle-company.component';
import { ValuesInputsModalsVehicleCompanyService } from '@services/values-inputs-modals-vehicle-company.service';

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

  constructor(private ValuesInputsModalsVehicleCompanyService:ValuesInputsModalsVehicleCompanyService){}

  formData = [
    {
      label: 'Nombre',
      id: 'name',
      type: 'text',
      placeholder: 'Nombre',
      fild: 'name',
    },
    {
      label: 'email',
      id: 'email',
      type: 'email',
      placeholder: 'email',
      fild: 'email',
    },
    {
      label: 'phone',
      id: 'phone',
      type: 'text',
      placeholder: 'phone',
      fild: 'phone',
    },
    {
      label: 'licencia',
      id: 'licencia',
      type: 'text',
      placeholder: 'licencia',
      fild: 'licencia',
    }
  ];

  onClick(){
    this.ValuesInputsModalsVehicleCompanyService.onClick();
  }
}

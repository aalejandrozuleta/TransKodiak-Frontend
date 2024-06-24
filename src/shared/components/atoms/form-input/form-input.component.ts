import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userTransporterCreate } from '@models/userTransporter';
import { ValuesInputsModalsVehicleCompanyService } from '@services/values-inputs-modals-vehicle-company.service';


@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  value:string = ""


  constructor(private valuesInputsModalsVehicleCompanyService: ValuesInputsModalsVehicleCompanyService) { }

  onChange(){
    this.valuesInputsModalsVehicleCompanyService.createUser(this.fild as keyof userTransporterCreate, this.value);
  }
  
  
}
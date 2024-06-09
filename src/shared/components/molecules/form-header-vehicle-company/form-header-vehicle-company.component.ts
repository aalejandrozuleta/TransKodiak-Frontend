import { SubtittleCreateVehicleComponent } from './../../atoms/subtitle-create/subtitle-create.component';
import { ButtonCancelComponent } from './../../atoms/button-cancel/button-cancel.component';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconRegisterVehicleComponent } from '@atoms/icon-register/icon-register.component';
import { TitleCreateVehicleComponent } from '@atoms/tittle-modal-vehicle-company/tittle-modal-vehicle-company.component';
import { EquisCloseComponent } from '@atoms/equis-close/equis-close.component';

@Component({
  selector: 'app-header-form-create-vehicle',
  standalone: true,
  imports: [
    CommonModule,
    IconRegisterVehicleComponent,
    ButtonCancelComponent,
    SubtittleCreateVehicleComponent,
    TitleCreateVehicleComponent,
    EquisCloseComponent
  ],
  templateUrl: './form-header-vehicle-company.component.html',
  styleUrls: ['./form-header-vehicle-company.component.scss']
})
export class HeaderFormCreateVehicleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormFieldComponent } from '@molecules/form-field/form-field.component';
import { FormButtonsComponent } from '@molecules/form-buttons/form-buttons.component';
import { HeaderFormCreateVehicleComponent } from '@molecules/form-header-vehicle-company/form-header-vehicle-company.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

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
  styleUrl: './create-modal-vehicle.component.scss'
})
export class CreateModalVehicleComponent {
  text: string = 'Guardar';

  // constructor(public dialogRef: MatDialogRef<CreateModalVehicleComponent>) {}
  // // handleClose() {
  // //   this.dialogRef.close();
  // // }
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    this.dialog.open(CreateModalVehicleComponent);
  }
}
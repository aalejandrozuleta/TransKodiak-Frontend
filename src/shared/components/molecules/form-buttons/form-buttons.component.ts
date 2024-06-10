import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCancelComponent } from '@atoms/button-cancel/button-cancel.component';
import { ButtonNextComponent } from '@atoms/button-next/button-next.component';
import { CreateModalVehicleComponent } from '@organisms/create-modal-vehicle/create-modal-vehicle.component';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-buttons',
  standalone: true,
  imports: [CommonModule, ButtonCancelComponent, ButtonNextComponent, CreateModalVehicleComponent],
  templateUrl: './form-buttons.component.html',
  styleUrl: './form-buttons.component.scss'
})
export class FormButtonsComponent {

  // constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   this.dialog.open(CreateModalVehicleComponent);
  // }
}

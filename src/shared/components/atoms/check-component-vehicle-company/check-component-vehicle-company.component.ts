 import { CommonModule } from '@angular/common';
 import { Component, Input,Output, EventEmitter } from '@angular/core';
 
 @Component({
   selector: 'app-check-component-vehicle-company',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './check-component-vehicle-company.component.html',
   styleUrl: './check-component-vehicle-company.component.scss'
 })
 export class CheckComponentVehicleCompanyComponent {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
 }
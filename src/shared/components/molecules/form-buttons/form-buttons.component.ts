import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCancelComponent } from '@atoms/button-cancel/button-cancel.component';
import { ButtonNextComponent } from '@atoms/button-next/button-next.component';

@Component({
  selector: 'app-form-buttons',
  standalone: true,
  imports: [CommonModule, ButtonCancelComponent, ButtonNextComponent],
  templateUrl: './form-buttons.component.html',
  styleUrl: './form-buttons.component.scss'
})
export class FormButtonsComponent {

}

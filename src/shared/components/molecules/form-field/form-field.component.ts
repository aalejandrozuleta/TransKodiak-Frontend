
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLabelComponent } from '@atoms/form-label/form-label.component';
import { FormInputComponent } from '@atoms/form-input/form-input.component';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormLabelComponent, FormInputComponent],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
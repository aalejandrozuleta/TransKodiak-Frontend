import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form-register-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-form-register-company.component.html',
  styleUrl: './input-form-register-company.component.scss'
})
export class InputFormRegisterCompanyComponent {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  value: string = '';
}

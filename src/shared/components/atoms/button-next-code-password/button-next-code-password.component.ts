import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-next-code-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-next-code-password.component.html',
  styleUrl: './button-next-code-password.component.scss'
})
export class ButtonNextCodePasswordComponent {
  @Input() disabled: boolean = false;
}

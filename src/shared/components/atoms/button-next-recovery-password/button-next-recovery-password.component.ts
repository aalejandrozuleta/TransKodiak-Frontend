import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-next-recovery-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-next-recovery-password.component.html',
  styleUrl: './button-next-recovery-password.component.scss'
})
export class ButtonNextRecoveryPasswordComponent {
  @Input() disabled: boolean = false;
}

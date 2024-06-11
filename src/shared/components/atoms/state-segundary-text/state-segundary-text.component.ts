import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state-segundary-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-segundary-text.component.html',
  styleUrl: './state-segundary-text.component.scss'
})
export class StateSegundaryTextComponent {
  @Input() text: string = '';
}

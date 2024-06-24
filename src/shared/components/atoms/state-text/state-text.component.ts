import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-text.component.html',
  styleUrl: './state-text.component.scss',
})
export class StateTextComponent {
  @Input() text: string = '';
}

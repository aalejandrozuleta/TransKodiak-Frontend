import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.scss',
})
export class FormLabelComponent {
  @Input() text: string = '';
  @Input() for: string = '';
}

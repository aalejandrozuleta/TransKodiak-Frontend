import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-next',
  standalone: true,
  imports: [],
  templateUrl: './button-next.component.html',
  styleUrl: './button-next.component.scss'
})
export class ButtonNextComponent {
  text: string = 'Siguiente';
}
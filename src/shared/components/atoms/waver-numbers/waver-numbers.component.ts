import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-waver-numbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './waver-numbers.component.html',
  styleUrl: './waver-numbers.component.scss',
})
export class WaverNumbersComponent {
  numbers: string[] = ['+ 57 300 200 04 19', '+ 57 300 200 04 19'];
}

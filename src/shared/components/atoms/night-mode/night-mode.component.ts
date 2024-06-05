import { Component } from '@angular/core';

@Component({
  selector: 'app-night-mode',
  standalone: true,
  imports: [],
  templateUrl: './night-mode.component.html',
  styleUrl: './night-mode.component.scss'
})
export class NightModeComponent {
  moonImg:string = '../../../../assets/icons/moon.png';
}

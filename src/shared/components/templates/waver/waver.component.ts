import { Component } from '@angular/core';
import { GroupWaverComponent } from '@organisms/group-waver/group-waver.component';

@Component({
  selector: 'app-waver',
  standalone: true,
  imports: [GroupWaverComponent],
  templateUrl: './waver.component.html',
  styleUrl: './waver.component.scss',
})
export class WaverComponent {}

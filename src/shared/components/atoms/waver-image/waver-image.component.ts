import { Component } from '@angular/core';

@Component({
  selector: 'app-waver-image',
  standalone: true,
  imports: [],
  templateUrl: './waver-image.component.html',
  styleUrl: './waver-image.component.scss',
})
export class WaverImageComponent {
  imgWaver: string = '../../../../assets/imagenes/camion-waver.png';
}

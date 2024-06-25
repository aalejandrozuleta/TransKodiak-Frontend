import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '@molecules/empty-state/empty-state.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent {
  hasContent: boolean = false;
  imgSrc: string = '../../assets/imagenes/mantenimiento.png';
  mainText: string = 'La pagina esta en mantenimiento';
  secondaryText: string = 'Por favor, vuelve más tarde.';
}

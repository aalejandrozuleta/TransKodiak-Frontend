import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '@molecules/empty-state/empty-state.component';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {
  hasContent: boolean = false;
  imgSrc: string = '../../assets/imagenes/mantenimiento.png';
  mainText: string = 'La pagina esta en mantenimiento';
  secondaryText: string = 'Por favor, vuelve más tarde.';
}

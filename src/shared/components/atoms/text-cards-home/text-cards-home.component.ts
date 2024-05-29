import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-cards-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-cards-home.component.html',
  styleUrl: './text-cards-home.component.scss',
})
export class TextCardsHomeComponent {
  @Input() textArray: string = '';
}

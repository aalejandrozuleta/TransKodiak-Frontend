import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-cards-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-cards-home.component.html',
  styleUrl: './title-cards-home.component.scss',
})
export class TitleCardsHomeComponent {
  @Input() titleArray: string = '';
}

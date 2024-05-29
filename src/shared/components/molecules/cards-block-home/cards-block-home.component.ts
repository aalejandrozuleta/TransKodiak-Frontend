import { CardsHome } from '@models/cards-home';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCardsHomeComponent } from '@atoms/text-cards-home/text-cards-home.component';
import { TitleCardsHomeComponent } from '@atoms/title-cards-home/title-cards-home.component';

@Component({
  selector: 'app-cards-block-home',
  standalone: true,
  imports: [CommonModule,TitleCardsHomeComponent,TextCardsHomeComponent,],
  templateUrl: './cards-block-home.component.html',
  styleUrl: './cards-block-home.component.scss'
})
export class CardsBlockHomeComponent {

  cardsInformation:CardsHome[] = [
    {
      title: '80+',
      description: 'Satisf client'
    },
    {
      title: '200+',
      description: 'Project complet'
    },
    {
      title: '99+',
      description: 'Reviews given'
    }
  ];
}

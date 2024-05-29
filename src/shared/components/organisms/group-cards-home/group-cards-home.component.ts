import { Component } from '@angular/core';
import { CardsBlockHomeComponent } from '@molecules/cards-block-home/cards-block-home.component';


@Component({
  selector: 'app-group-cards-home',
  standalone: true,
  imports: [CardsBlockHomeComponent],
  templateUrl: './group-cards-home.component.html',
  styleUrl: './group-cards-home.component.scss'
})
export class GroupCardsHomeComponent {

}

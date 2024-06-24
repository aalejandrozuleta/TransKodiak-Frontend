import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-travel-notification',
  standalone: true,
  imports: [],
  templateUrl: './type-travel-notification.component.html',
  styleUrl: './type-travel-notification.component.scss',
})
export class TypeTravelNotificationComponent {
  @Input() typeTravel: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-notification',
  standalone: true,
  imports: [],
  templateUrl: './img-notification.component.html',
  styleUrl: './img-notification.component.scss',
})
export class ImgNotificationComponent {
  @Input() imgPerson = '' ;
}

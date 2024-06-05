import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-user-notification',
  standalone: true,
  imports: [],
  templateUrl: './name-user-notification.component.html',
  styleUrl: './name-user-notification.component.scss'
})
export class NameUserNotificationComponent {
  @Input() namUser: string = '';
}

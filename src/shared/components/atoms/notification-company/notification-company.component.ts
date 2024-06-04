import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-company',
  standalone: true,
  imports: [],
  templateUrl: './notification-company.component.html',
  styleUrl: './notification-company.component.scss'
})
export class NotificationCompanyComponent {
  notificationImg:string = "../../../../assets/icons/notification.png"
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlockNotificationsComponent } from '@organisms/block-notifications/block-notifications.component';

@Component({
  selector: 'app-notification-company',
  standalone: true,
  imports: [CommonModule, BlockNotificationsComponent],
  templateUrl: './notification-company.component.html',
  styleUrl: './notification-company.component.scss',
})
export class NotificationCompanyComponent {
  notificationImg: string = '../../../../assets/icons/notification.png';

  showBlockNotifications = false;

  onClick() {
    this.showBlockNotifications = !this.showBlockNotifications;
  }
}

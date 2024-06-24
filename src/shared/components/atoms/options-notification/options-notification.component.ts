import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-notification.component.html',
  styleUrl: './options-notification.component.scss',
})
export class OptionsNotificationComponent {
  @Input() options: any = [];
}

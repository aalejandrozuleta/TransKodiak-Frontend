import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsNotificationComponent } from './../../atoms/options-notification/options-notification.component';
import { ImgNotificationComponent } from '@atoms/img-notification/img-notification.component';
import { NameUserNotificationComponent } from '@atoms/name-user-notification/name-user-notification.component';
import { TypeTravelNotificationComponent } from '@atoms/type-travel-notification/type-travel-notification.component';


@Component({
  selector: 'app-blocks-information-notification',
  standalone: true,
  imports: [
    CommonModule,
    ImgNotificationComponent,
    OptionsNotificationComponent,
    NameUserNotificationComponent,
    TypeTravelNotificationComponent,
  ],
  templateUrl: './blocks-information-notification.component.html',
  styleUrl: './blocks-information-notification.component.scss',
})
export class BlocksInformationNotificationComponent {
  @Input() notifications:any = [];
}

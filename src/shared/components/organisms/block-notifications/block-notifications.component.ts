import { Component } from '@angular/core';
import { BlocksInformationNotificationComponent } from '@molecules/blocks-information-notification/blocks-information-notification.component';

@Component({
  selector: 'app-block-notifications',
  standalone: true,
  imports: [BlocksInformationNotificationComponent],
  templateUrl: './block-notifications.component.html',
  styleUrl: './block-notifications.component.scss',
})
export class BlockNotificationsComponent {
  dataInformation = [
    {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    },
/*     {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    },
    {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    },
    {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    },
    {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    },
    {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    },
    {
      namUser: 'Alejandro Zuleta',
      imgPerson: '../../../../assets/static/avatar.png',
      iconOption: [
        {
          icon: '../../../../assets/icons/bxs-check-circle.svg',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/X.png',
          classIcon: 'trash',
        },
        {
          icon: '../../../../assets/icons/extend.png',
          classIcon: 'trash',
        },
      ],
      typeTravel: 'Medellin',
    }, */

  ];
}

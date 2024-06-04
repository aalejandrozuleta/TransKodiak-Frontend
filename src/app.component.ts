import { User } from './core/models/user-table-vehicle-company';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontendPrueba';

  users: User[] = [
    {
      avatar: 'path_to_avatar1.jpg',
      name: 'Jane Cooper',
      placa: 'WFR 358',
      email: 'jessica.hanson@example.com',
      date: '5/27/15'
    },
  ];

  addUser(user: User) {
    this.users.push(user);
  }
}


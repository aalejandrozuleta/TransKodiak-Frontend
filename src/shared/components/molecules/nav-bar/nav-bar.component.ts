import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  optionsMenu: MenuItem[] = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Register',
      link: '/register'
    }
  ];
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-register',
  standalone: true,
  imports: [],
  templateUrl: './btn-register.component.html',
  styleUrl: './btn-register.component.scss',
})
export class BtnRegisterComponent {
  register: string = '/register';
}

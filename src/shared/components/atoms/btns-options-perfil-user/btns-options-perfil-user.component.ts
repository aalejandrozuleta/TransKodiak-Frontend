import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btns-options-perfil-user',
  standalone: true,
  imports: [],
  templateUrl: './btns-options-perfil-user.component.html',
  styleUrl: './btns-options-perfil-user.component.scss',
})
export class BtnsOptionsPerfilUserComponent {
  @Input() imgOptions = '';
  @Input() nameAction = '';
  @Input() imgArrow = '';
  @Input() className = '' || 'blockOptions';
  @Input() action = () => {};
}

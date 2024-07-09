import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tittle-modals-message-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './tittle-modals-message-confirmation.component.html',
  styleUrl: './tittle-modals-message-confirmation.component.scss'
})
export class TittleModalsMessageConfirmationComponent {
  @Input() tittle: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-block-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './text-block-modal-confirm.component.html',
  styleUrl: './text-block-modal-confirm.component.scss',
})
export class TextBlockModalConfirmComponent {
  @Input() textMessage: string = '';
}

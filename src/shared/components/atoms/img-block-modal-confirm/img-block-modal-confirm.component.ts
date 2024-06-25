import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-block-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './img-block-modal-confirm.component.html',
  styleUrl: './img-block-modal-confirm.component.scss',
})
export class ImgBlockModalConfirmComponent {
  @Input() imgBlockModal = '';
}

import { Component, Input } from '@angular/core';
import { ButtonBlockModalConfirmComponent } from '@atoms/button-block-modal-confirm/button-block-modal-confirm.component';
import { ButtonCancelBlockModalComponent } from '@atoms/button-cancel-block-modal/button-cancel-block-modal.component';
import { ButtonCloseBlockModalConfirmComponent } from '@atoms/button-close-block-modal-confirm/button-close-block-modal-confirm.component';
import { ImgBlockModalConfirmComponent } from '@atoms/img-block-modal-confirm/img-block-modal-confirm.component';
import { TextBlockModalConfirmComponent } from '@atoms/text-block-modal-confirm/text-block-modal-confirm.component';

@Component({
  selector: 'app-block-modal-confirm',
  standalone: true,
  imports: [
    ButtonBlockModalConfirmComponent,
    ButtonCloseBlockModalConfirmComponent,
    ImgBlockModalConfirmComponent,
    TextBlockModalConfirmComponent,
    ButtonCancelBlockModalComponent,
  ],
  templateUrl: './block-modal-confirm.component.html',
  styleUrl: './block-modal-confirm.component.scss',
})
export class BlockModalConfirmComponent {
  @Input() imgBlockReference = '';
  @Input() textBlockReference = '';
  @Input() idUser: number = 0;
}

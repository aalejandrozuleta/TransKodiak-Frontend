import { Component } from '@angular/core';
import { BlocksColorSignInComponent } from '@molecules/blocks-color-sign-in/blocks-color-sign-in.component';
import { ImgFormSignInComponent } from '@organisms/img-form-sign-in/img-form-sign-in.component';

@Component({
  selector: 'app-block-color-form',
  standalone: true,
  imports: [ImgFormSignInComponent, BlocksColorSignInComponent],
  templateUrl: './block-color-form.component.html',
  styleUrl: './block-color-form.component.scss',
})
export class BlockColorFormComponent {}

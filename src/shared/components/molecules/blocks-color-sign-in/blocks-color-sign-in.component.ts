import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlocksColorsSignInComponent } from '@atoms/blocks-colors-sign-in/blocks-colors-sign-in.component';

@Component({
  selector: 'app-blocks-color-sign-in',
  standalone: true,
  imports: [CommonModule, BlocksColorsSignInComponent],
  templateUrl: './blocks-color-sign-in.component.html',
  styleUrl: './blocks-color-sign-in.component.scss',
})
export class BlocksColorSignInComponent {
  colors = [
    {
      color: 'white',
    },
    {
      color: 'blue',
    },
  ];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blocks-colors-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './blocks-colors-sign-in.component.html',
  styleUrl: './blocks-colors-sign-in.component.scss',
})
export class BlocksColorsSignInComponent {
  @Input() colorClass = '';
}

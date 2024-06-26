import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imglupastate',
  standalone: true,
  imports: [],
  templateUrl: './imglupastate.component.html',
  styleUrl: './imglupastate.component.scss',
})
export class ImglupastateComponent {
  @Input() imgSrc: string = '';
}

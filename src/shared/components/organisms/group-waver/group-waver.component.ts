import { Component } from '@angular/core';
import { WaverButtonComponent } from '@atoms/waver-button/waver-button.component';
import { WaverImageComponent } from '@atoms/waver-image/waver-image.component';
import { WaverNumbersComponent } from '@atoms/waver-numbers/waver-numbers.component';
import { WaverBackgroundTextComponent } from '@molecules/waver-background-text/waver-background-text.component';

@Component({
  selector: 'app-group-waver',
  standalone: true,
  imports: [WaverBackgroundTextComponent,WaverImageComponent,WaverButtonComponent,WaverNumbersComponent],
  templateUrl: './group-waver.component.html',
  styleUrl: './group-waver.component.scss'
})
export class GroupWaverComponent {

}

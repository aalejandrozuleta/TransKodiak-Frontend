import { Component } from '@angular/core';
import { GroupCardsHomeComponent } from '@organisms/group-cards-home/group-cards-home.component';
import { HeaderComponent } from '@organisms/header/header.component';
import { InformationHomeComponent } from '@organisms/information-home/information-home.component';
import { WaverComponent } from 'src/shared/components/templates/waver/waver.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    WaverComponent,
    InformationHomeComponent,
    GroupCardsHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
}

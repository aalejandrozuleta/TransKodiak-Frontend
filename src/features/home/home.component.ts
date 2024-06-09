import { Component } from '@angular/core';
import { CompleteHeaderFormVehicleComponent } from '@organisms/complete-header-form-vehicle/complete-header-form-vehicle.component';
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
    GroupCardsHomeComponent,
    CompleteHeaderFormVehicleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
}

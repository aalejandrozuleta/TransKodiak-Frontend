import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-welcome-vehicle-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-welcome-vehicle-company.component.html',
  styleUrl: './img-welcome-vehicle-company.component.scss'
})
export class ImgWelcomeVehicleCompanyComponent {
  imgWelcome:string = '../../../../assets/imagenes/welcome.png';
}
